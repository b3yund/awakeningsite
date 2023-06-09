import React from 'react';
import styles from './Footer.module.css';

import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
          <a href="/">Contact Us</a>
        </div>
        <div className={styles.media}>
          <FaFacebook className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>
      </footer>
    </IconContext.Provider>
  );
}

export default Footer;



//<Link to="/">Home</Link>
//    <Link to="/about">About</Link>