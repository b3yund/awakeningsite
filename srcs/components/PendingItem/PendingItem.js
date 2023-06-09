// Item.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PendingItem.module.css';

import Build from '../../assets/Build.gif';

function PendingItem({wid}) {

  return (
    <div id={styles.item} style={{ "--theWidth": wid, backgroundImage: `url(${Build})`}}>
      <div id={styles.slot}>
        <p>Coming Soon</p>
      </div>
    </div>
  );
}

export default PendingItem;


