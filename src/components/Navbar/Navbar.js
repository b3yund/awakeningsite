import React, { useState } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Beyund's</a>
      </div>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggleInput}
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={isOpen ? styles.tabsOpen : styles.tabs}>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/products">
            Products
          </a>
        </li>
        <li>
          <a href="/cart">
              <FaShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

