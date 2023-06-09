// Item.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PreviewItem.module.css';

function Item({ color, image, details, wid }) {
  console.log(image)
  return (
    <div id={styles.item} style={{ "--theWidth": wid, backgroundImage: image, backgroundColor: color }}>
      <div id={styles.slot}>
        <p>Placeholder</p>
      </div>
    </div>
  );
}

export default Item;


