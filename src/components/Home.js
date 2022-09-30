import React from 'react';
import styles from './home.module.css';
import { MdEmail }  from 'react-icons/md';

export const Home = () => {
  return (
    <div className={styles.container}>
        <header>
            <img src="/img/logo.png" alt="logo" className={styles.logoImg}/>
            <div className={styles.email}>
                <div className={styles.emailIcon}>
                    <MdEmail />
                </div>
                <a href="https://amicia.com.au/" target='blank'><p className={styles.emailtext} >info@amicia.com.au</p></a>
            </div>
        </header>

        <div className={styles.text}>
            <div className={styles.text1}>Digital Recruitment Specialists</div>
            <div className={styles.line}></div>
            <p className={styles.text2}>Our Top Candidates are Capable of Delivering</p>
            <img src="/img/showcase_subtitle.png" alt="subtitle" className={styles.logoTextImg}/>
           <div className={styles.text3}>Helping you deliver great customer experiences, our strategy, design and </div>
           <div className={styles.text3}>technology work together to build what’s next!</div>
        </div>
         
         <div className={styles.btn}>
             <button>ENGAGE WITH US</button>
         </div>
    </div>
  )
}
