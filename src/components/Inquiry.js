import React from 'react';
import styles from './inquiry.module.css';

export const Inquiry = () => {
  return (
    <div className={styles.container}>
       <div className={styles.text}>
           <div className={styles.text1}>Send us your inquiry</div>
           <div className={styles.text2}>I would like to discuss</div>
       </div>

       <form>
        <div className={styles.text3}>Amicia inquiry</div>
        <input type="email" placeholder='your e-mail' />
        <input type="text" placeholder='your name' />
        <textarea name="msd" id="msg" cols="30" rows="10" placeholder='your message'></textarea>

        <div className={styles.bottom}>
            <div className={styles.text4}>3 + 4 = <div className={styles.square}></div></div>
            <button>SEND MESSAGE</button>
        </div>
       </form>
    </div>
  )
}
