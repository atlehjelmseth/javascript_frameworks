import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from '../styles/General.module.css';

const url = 'https://v2.api.noroff.dev/online-shop';

function Product() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getProductData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
      
    }
    getProductData();
    
  }, [id]);


  if (isLoading) {
    return <div className={Styles.loading}>Loading product...</div>;
  }

  if (isError) {
    return <div className={Styles.error}>Error loading product data...</div>;
  }

  if (!product || !product.data) {
    return <div>No product data available</div>;
  }

  return (
    <div>
      <h2>{product.data.title}</h2>
      <img src={product.data.image.url} alt={product.data.title} />
    <div>
      <p>Price: {product.data.discountedPrice.toFixed(2)}</p>
      <p>Discount: {(product.data.price - product.data.discountedPrice).toFixed(2)}</p>
        <button>Add to cart</button>
    </div>
  </div>
  );
}

export default Product;
