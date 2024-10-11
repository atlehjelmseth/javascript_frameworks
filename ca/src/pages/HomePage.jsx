import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../styles/General.module.css';
import Cards from '../styles/Cards.module.css';

const url = 'https://v2.api.noroff.dev/online-shop';

function Home() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div className={Styles.loading}>Loading product</div>;
  }
  if (isError) {
    return <div className={Styles.error}>Error loading data</div>;
  }

  return (
    <div className={Styles.mainContainer}>
      {product.data && product.data.map((product) => (
        <div key={product.id} className={Cards.card}>
          <div>
            <h2>{product.title}</h2>
            <img src={product.image.url} alt={product.title} />
          </div>
          <div>
          {product.price !== product.discountedPrice && (
              <p className={Cards.before}>Before: {(product.price).toFixed(2)},-</p>
            )}
            <p className={Cards.now}>Price: {product.discountedPrice.toFixed(2)},-</p>

            <Link to={`/product/${product.id}`}>
              <button>More info</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
