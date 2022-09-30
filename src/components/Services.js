import React from 'react';
import styles from './services.module.css';

export const Services = () => {
  return (
    <div>
        <div className={styles.text}>
            <div className={styles.text1}>Services</div>
            <div className={styles.text2}>Our best features</div>
        </div>
        
        <div className={styles.services}>
            <div className={styles.left}>
                <div className={styles.item}>
                    <img src="/img/services/sp-icon.png" alt="sp-icon" className={styles.icon}/>
                    <div className={styles.content}>
                        <div className={styles.title}>SharePoint</div>
                        <div className={styles.text3}>We design Microsoft Office 365 and SharePoint internets, intranets and workspaces to improve business communication, collaboration and information sharing.</div>
                    </div>   
                </div>

                <div className={styles.item}>
                    <img src="/img/services/icon17-1.png" alt="sp-icon" className={styles.icon}/>
                    <div className={styles.content}>
                        <div className={styles.title}>UX and Design</div>
                        <div className={styles.text3}>We are problem-solvers, using our rich toolbox we can help you address your user experience design challenges and achieve best possible user experiences.</div>
                    </div>   
                </div>

                <div className={styles.item}>
                    <img src="/img/services/mt-icon.png" alt="sp-icon" className={styles.icon}/>
                    <div className={styles.content}>
                        <div className={styles.title}>Mobile Development</div>
                        <div className={styles.text3}>Mobile applications is front and center of the most of our projects, we build creative & efficient mobile solutions to engage more users on mobile and tablet devices.</div>
                    </div>   
                </div>
                
            </div>

            <img src="/img/services/phone_03-2.png" alt="phone" className={styles.phone}/>

            <div className={styles.right}>
                <div className={styles.item}>
                        <img src="/img/services/sm-icon.png" alt="sp-icon" className={styles.icon}/>
                        <div className={styles.content}>
                            <div className={styles.title}>Squiz Matrix</div>
                            <div className={styles.text3}>We implement leading Open Source web platform to help you create cost effective but incredible online experiences and achieve your digital goals.</div>
                        </div>   
                    </div>

                    <div className={styles.item}>
                        <img src="/img/services/dp-icon.png" alt="sp-icon" className={styles.icon}/>
                        <div className={styles.content}>
                            <div className={styles.title}>GovCMS (Drupal)</div>
                            <div className={styles.text3}>Our Open Source specialists have implemented end-to-end Drupal projects, we can execute secure, compliant, adaptable and feature rich solution that will provide an outstanding user experience.</div>
                        </div>   
                    </div>

                    <div className={styles.item}>
                        <img src="/img/services/azure-icon.png" alt="sp-icon" className={styles.icon}/>
                        <div className={styles.content}>
                            <div className={styles.title}>Microsoft Azure</div>
                            <div className={styles.text3}>Our specialised team can assist your business transition to Azure cloud, we can configure and administer Azure solutions including Computing, Networking, Storage, Web & Mobile, Databases, CDN and enterprise integration.</div>
                        </div>   
                    </div>




            </div>
        </div>

    </div>
  )
}
