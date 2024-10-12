import { Link } from 'react-router-dom';
import ButtonStyle from '../styles/Button.module.css';

function Success() {
  return ( 
    <div>
      <h1>Your order was successfully placed</h1>
      <div className={ButtonStyle.buttonsDiv}>
        <Link to="/"><button>Back to store</button></Link>
      </div>
    </div>
   );
}


export default Success;