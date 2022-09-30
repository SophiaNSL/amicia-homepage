import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
         <img src="/img/logo.png" alt="logo" />
         <div  className={styles.text1}>Ultimate digital recruitment company!</div>
      </div>
       
        <p className={styles.text2}>2022 © Amicia. All Rights Reserved.</p>
    </div>
  )
}
