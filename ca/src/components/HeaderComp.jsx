import Nav from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return ( 
    <header>
      <Link to="/"><h1>eCom Store</h1></Link>
      <Nav />
    </header>
   );
}
 
export default Header;

