import React, { useState } from 'react';
import NavStyles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { useShoppingCart } from './ShoppingCart';

function Navbar() {
  const { cart } = useShoppingCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Link href="#" onClick={toggleMenu}>Menu</Link>
          </li>
          <li>
            <Link to="/cart">
              <CiShoppingCart className={NavStyles.cartIcon} /> <span>{totalItems}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className={NavStyles.fullscreenMenu}>
          <button className={NavStyles.closeButton} onClick={toggleMenu}>Close</button>
          <ul className={NavStyles.fullscreenLinks}>
            <li >
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
