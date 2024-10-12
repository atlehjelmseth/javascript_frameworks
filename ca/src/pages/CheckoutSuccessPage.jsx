import { Link } from 'react-router-dom';
import ButtonStyle from '../styles/Button.module.css';
import Styles from '../styles/General.module.css';

function Success() {
  return ( 
    <div>
      <p className={Styles.loading}>Your order was successfully placed</p>
      <div className={ButtonStyle.buttonsDiv}>
        <Link to="/"><button>Back to store</button></Link>
      </div>
    </div>
   );
}


export default Success;