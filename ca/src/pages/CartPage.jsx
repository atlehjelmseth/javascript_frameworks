import React from 'react';
import { useShoppingCart } from '../components/ShoppingCart';
import { Link } from 'react-router-dom';
import Cards from '../styles/Cards.module.css';
import Styles from '../styles/General.module.css';
import ButtonStyle from '../styles/Button.module.css';
import CartPageStyle from '../styles/CartPage.module.css';


function CartPage() {
  const { cart, removeFromCart, clearCart } = useShoppingCart();
  const totalAmount = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);


  return (
    <div >
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (<p>Your cart is empty</p>) : 
      (<div className={Styles.mainContainer}>
         {cart.map((item, index) => (
           <div key={index} className={Cards.card}>
            <div>
             <h3>{item.title}</h3>
             <img src={item.image.url} alt={item.title}/>
             </div>
             <div>
             <p>Price: {item.discountedPrice.toFixed(2)}</p>
             <p>Quantity: {item.quantity}</p>
             <p>Total: {(item.discountedPrice * item.quantity).toFixed(2)}</p>
             </div>
             <div>
             <button className={ButtonStyle.primary} onClick={() => removeFromCart(item.id)}>Remove from cart</button>
             </div>
           </div>
         ))}
       </div>
      )}
          {cart.length > 0 && (
            <div className={CartPageStyle.amountAndCheckout}>
              <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
              <Link to={`/cartsuccess`}>
              <button className={ButtonStyle.primary} onClick={clearCart}>Checkout</button></Link>
            </div>
          )}
    </div>
  );
}

export default CartPage;
