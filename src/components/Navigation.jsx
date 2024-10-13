import React, { useState } from 'react';
import NavStyles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { useShoppingCart } from './ShoppingCart';

function Navbar() {
  const { cart } = useShoppingCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const [checkMenuOpen, setCheckMenuOpen] = useState(false);

  const changeMenu = () => {
    setCheckMenuOpen(!checkMenuOpen);
  };

  return (
    <>
      <nav>
        <ul className={NavStyles.links}>
          <li className={NavStyles.desktop}>
            <Link to="/">Home</Link>
          </li>
          <li className={NavStyles.desktop}>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className={NavStyles.mobile}>
            <Link href="#" onClick={changeMenu}>Menu</Link>
          </li>
          <li>
            <Link className={NavStyles.cartLink} to="/cart">
              <CiShoppingCart className={NavStyles.cartIcon} /> <span>{totalItems}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {checkMenuOpen && (
        <div className={NavStyles.fullscreenMenu}>
          <button className={NavStyles.closeButton} onClick={changeMenu}>Close</button>
          <ul className={NavStyles.fullscreenLinks}>
            <li >
              <Link to="/" onClick={changeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/contact" onClick={changeMenu}>Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
