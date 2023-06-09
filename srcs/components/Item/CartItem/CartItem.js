import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ product, removeProduct }) => {

  const handleRemoveFromCart=()=>{
    removeProduct(product.title)
  }

  const imageUrl = `https://b3yund.pythonanywhere.com/static/images/${product.image}`;

  const cartItemImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add any additional styles as needed
  };

  return (
    <div className={styles.cartitem}>
      <div className={styles.image} style={cartItemImageStyle} alt={product.title} />
      <div className={styles.details}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.amount}>${product.price}</p>
        <p className={styles.quantity}>1</p>
        <button className={styles.removeButton} onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
