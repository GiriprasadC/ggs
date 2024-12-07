import styles from './contactus.module.css'
import instagram from '../public/instagram.webp'
import youtube from '../public/youtube.webp'
import Image from 'next/image';
import Link from 'next/link';
export default function ContactUs() {
  return (
    <div id='ContactUs' className={styles.contactContainer}>
      <div className={styles.contactUs}>
      <h2>Contact Us</h2>
      <div className={styles.contactContainerContent}>
        <div className={styles.contactContainerDetails}>
          <h3>Contact EMail</h3>
          <h4>Contact@GamerGenesisStudio.com</h4>
          <br/>
          <h3>SOCIAL MEDIA</h3>
          <div className={styles.contactSocialMedia}>
            <Link href="https://www.instagram.com/gamer_genesis_studio/"><Image src={instagram} alt='Gamer Genesis Studio Instagram' height={100} width={100}/></Link>
            <Link href="https://www.youtube.com/@GamerGenesisStudio"><Image src={youtube} alt='Gamer Genesis Studio Youtube' height={100} width={100}/></Link>
          </div>
        </div>
        <div className={styles.contactContainerForm}>
          <input placeholder='Enter your Email' type='email'/>
          <textarea placeholder='Enter your Queries'></textarea><button>Send</button>

        </div>
      </div>

      </div>
      <div className={styles.footer}>
        COPYRIGHTS &copy; 2025, Gamer Genesis Studio, All Rights Reserved | Designed by JV
      </div>
    </div>
  );
}
