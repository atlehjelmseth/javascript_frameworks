import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from '../styles/General.module.css';
import Cards from '../styles/Cards.module.css';
import ButtonStyle from '../styles/Button.module.css';

const url = 'https://v2.api.noroff.dev/online-shop';

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (search.trim() !== '') {
      const filteredSuggestions = product.data
        ? product.data.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          )
        : [];
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [search, product]);

  const handleSuggestionClick = (id) => {
    navigate(`/product/${id}`); 
  };

  if (loading) {
    return <div className={Styles.loading}>Loading</div>;
  }
  if (error) {
    return <div className={Styles.error}>Error loading</div>;
  }

  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder="Search for product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={Styles.searchBar}
      />

      {suggestions.length > 0 && (
        <ul className={Styles.suggestion}>
          {suggestions.map((item) => (
            <li
              key={item.id}
              className={Styles.suggestionItem}
              onClick={() => handleSuggestionClick(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}

      <div className={Styles.mainContainer}>
        {product.data &&
          product.data.map((product) => (
            <div key={product.id} className={Cards.card}>
              <div>
                <h2>{product.title}</h2>
                <img src={product.image.url} alt={product.title} />
              </div>
              <div>
                {product.price !== product.discountedPrice && (
                  <p className={Cards.before}>
                    Before: {product.price.toFixed(2)},-
                  </p>
                )}
                <p className={Cards.now}>
                  Price: {product.discountedPrice.toFixed(2)},-
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className={ButtonStyle.primary}>More info</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
