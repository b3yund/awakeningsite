import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';

function ProductItem({ product, addToCart }) {
  const handleAddToCart = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      addToCart({ userId: userId, productTitle: product.title });
    } else {
      console.log('User not logged in');
    }
  };

  const imageUrl = `https://b3yund.pythonanywhere.com/static/images/${product.image}`;
  console.log(imageUrl)

  const itemStyle = {
    "--theWidth": product.wid,
    backgroundImage: `url(${imageUrl})`,
    backgroundColor: product.color,
  };

  return (
    <div id={styles.item} style={itemStyle}>
      <div id={styles.slot}>
        <p>Placeholder</p>
        <button onClick={handleAddToCart}>Click Me</button>
      </div>
    </div>
  );
}

export default ProductItem;
