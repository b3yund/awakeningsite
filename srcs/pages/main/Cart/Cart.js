import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import axios from 'axios';

import Navbar from '../../../components/Navbar/Navbar.js';
import Footer from '../../../components/Footer/Footer.js';

import CartItem from '../../../components/Item/CartItem/CartItem';

function Cart() {
  const navigate = useNavigate();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  

  useEffect(() => {
    getUserCart();
  }, []);

  const getUserCart = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get('https://b3yund.pythonanywhere.com/api/get_user_cart', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userId,
        },
      });
      const userCartProducts = response.data;
      setCartProducts(userCartProducts);
    } catch (error) {
      console.error('Error getting user cart: ', error);
    }
  };

  useEffect(() => {
    const calculateCartTotal = () => {
      let total = 0;
      for (const product of cartProducts) {
        total += Number(product.price); // Convert price to number before adding
      }
      setCartTotal(total);
    };

    calculateCartTotal();
  }, [cartProducts]);

  const removeProductFromCart = async (productId) => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.post('hhttps://b3yund.pythonanywhere.com/api/remove_from_cart', {
        userId: userId,
        productId: productId,
      });
      console.log('Successfully removed from cart');
      setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((cartProduct) => cartProduct.ID !== productId)
      );
      getUserCart(); // Update the cart after product removal
    } catch (error) {
      console.error('Error removing product from cart: ', error);
    }
  };
  
  

  const handleCheckout = async () => {
    try {
      // Create a POST request to the /checkout route
      const response = await axios.post('https://b3yund.pythonanywhere.com/checkout', {
        total: cartTotal, // Pass the total amount to be paid
      });
  
      // Retrieve the session ID from the response
      const sessionId = response.data.sessionId;
  
      // Redirect the user to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/...?sessionId=${sessionId}`;
  
    } catch (error) {
      console.error('Error:', error);
      // Handle error case
    }
  };

  return (
    <div className={styles.container}>
      <section id={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.section} id={styles.headCaption}>
        {cartProducts.length > 0 ? (
          <>
            <div className={styles.topbar}>
              <button className={styles.backButton}>Back</button>
              <div className={styles.details}>
                <p className={styles.title}>Name</p>
                <p className={styles.price}>Price</p>
                <p className={styles.qty}>Qty</p>
              </div>
            </div>
            {cartProducts.map((cartProduct) => (
              <CartItem
              key={cartProduct.ID}
              product={cartProduct}
              removeProduct={removeProductFromCart}
              />
            
            ))}
            <div className={styles.topbar}>
              <div className={styles.details}>
                <p className={styles.totalTag}>Total:</p>
                <p className={styles.price}>${cartTotal}</p>
                <button className={styles.checkout} onClick={handleCheckout}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        ) : (
          cartProducts.length < 1 && <div>No products to show</div>
        )}
      </section>
      <section id={styles.footer}>
        <Footer />
      </section>
    </div>
  );
}

export default Cart;
