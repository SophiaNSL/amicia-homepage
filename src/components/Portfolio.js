import React from 'react';
import styles from './portfolio.module.css';

export const Portfolio = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text1}>Our Portfolio</div>
        <div className={styles.text2}>The web applications are front and center of the most of our projects.</div>
        <div className={styles.text3}>Basically, working on crafting apps that run on all devices is the backbone of our routine.</div>
        <div className={styles.imgs}>
            <img src="/img/portfolio/1.jpg" alt="portfolio1" className={styles.portfolio}/>
            <img src="/img/portfolio/2.jpg" alt="portfolio2" className={styles.portfolio}/>
            <img src="/img/portfolio/3.jpg" alt="portfolio3" className={styles.portfolio}/>
        </div>

    </div>
  )
}
