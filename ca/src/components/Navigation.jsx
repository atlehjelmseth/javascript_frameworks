import NavStyles from '../styles/Navbar.module.css'
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return ( 
    <nav >
      <div className={NavStyles.navElements}>
        <div className={NavStyles.links}>
          <a href="/homepage">Home</a>
          <a href="/contact">Contact Us</a>
        </div>
        <CiShoppingCart size={40} style={{ marginLeft: '20px' }}/>
      </div>
    </nav>
   );
}
 
export default Navbar;

