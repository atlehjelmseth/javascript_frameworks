import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../components/ShoppingCart';
import { Link } from 'react-router-dom';
import Styles from '../styles/General.module.css';
import Cards from '../styles/Cards.module.css';
import ButtonStyle from '../styles/Button.module.css';
import ProductStyle from '../styles/Product.module.css';

const url = 'https://v2.api.noroff.dev/online-shop';

function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { addToCart, cart } = useShoppingCart();

  useEffect(() => {
    async function getProductData() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        setProduct(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getProductData();
  }, [id]);

  if (loading) {
    return <div className={Styles.loading}>Loading</div>;
  }

  if (error) {
    return <div className={Styles.error}>Error loading</div>;
  }

  if (!product || !product.data) {
    return <div>No product data available</div>;
  }

  const itemInCart = cart.find((item) => item.id === product.data.id);
  const numberInCart = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product.data);
  };

  return (
    <div className={Cards.cardProduct}>
      <h2>{product.data.title}</h2>
      <img src={product.data.image.url} alt={product.data.title} />
      <p>{product.data.description}</p>
      <div>
        {product.data.price !== product.data.discountedPrice ? (
          <div>
            <p className={Cards.before}>Discount: {(product.data.price - product.data.discountedPrice).toFixed(2)},-</p>
            <p className={Cards.now}>Price: {product.data.discountedPrice.toFixed(2)},-</p>
          </div>
        ) : (
          <p>Price: {product.data.price.toFixed(2)},-</p>
        )}
        <div className={ButtonStyle.buttonsDiv}>
        <button className={ButtonStyle.callToAction} onClick={handleAddToCart}>
          Add to cart {numberInCart > 0 && `(${numberInCart})`}
        </button>
        <Link to="/cart"><button className={ButtonStyle.primary}>Go to checkout</button></Link>
        </div>
      </div>
      {product.data.reviews && product.data.reviews.length > 0 && (
        <div className={ProductStyle.review}>
          <h3>Reviews:</h3>
          <div className={Styles.review}>
            {product.data.reviews.map((review) => (
              <li key={review.id}>
                <strong>{review.username}:</strong> {review.description}
                <p className={ProductStyle.rating}>Rating: {review.rating}</p>
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
