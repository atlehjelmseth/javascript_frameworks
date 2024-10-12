import NavStyles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { useShoppingCart } from './ShoppingCart';


function Navbar() {
  const { cart } = useShoppingCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return ( 
    <nav>
      <ul className={NavStyles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/cart"><CiShoppingCart className={NavStyles.cartIcon}/> <span >{totalItems}</span></Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;

