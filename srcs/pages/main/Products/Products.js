import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Products.module.css';

import Navbar from "../../../components/Navbar/Navbar.js";
import Footer from "../../../components/Footer/Footer.js";

import ProductItem from '../../../components/Item/ProductItem/ProductItem.js';
import PendingItem from '../../../components/PendingItem/PendingItem.js';

export const Products = (props) => {
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://b3yund.pythonanywhere.com/api/product'); // Updated API endpoint
        const data = await response.json();
        setSlides(data);

        data.forEach((product) => {
          console.log('Image Path:', product.image);
        });
        
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProductData();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch('https://b3yund.pythonanywhere.com/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        console.log('Item added to cart successfully');
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart: ', error);
    }
  };
  return (
    <div className={styles.container}>
      <section id={styles.navbar}><Navbar/></section>
      <section className={styles.section} id={styles.products}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Here are some of my current products</h2>
        </div>
        <div className={styles.gridContainer}>
          {slides.map((slide) => (
            <ProductItem product={slide} key={slide.id} className={styles.gridItem} addToCart={addToCart} />
          ))}
          <PendingItem/>
        </div>
      </section>
      <section id={styles.footer}><Footer/></section>
    </div>
  );
}

export default Products;
