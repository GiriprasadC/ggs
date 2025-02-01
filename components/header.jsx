import Image from 'next/image';
import styles from './header.module.css'
import ggslogo from '@/public/GGS_Logo_Opti.webp'
import Link from 'next/link';
import colony from '../public/colony.webp'
export default function GGSHeader() {
  return (
    <div id='Home' className={styles.header_container}>
        <div className={styles.header_navbar}>
            <div className={styles.navbarOne}>
                <Image height={80} width={80} src={ggslogo} alt='Gamer Genesis Studio Logo'/><h1>Gamer Genesis Studio <span>By Eucleia Entertainment</span></h1>
            </div>
            <div className={styles.navbarTwo}>
                <div className={styles.navLinks}>
                <Link href='#Home'><h2 className={styles.navButtons}><span>Home</span></h2></Link>
                <Link href='#Team'><h2 className={styles.navButtons}><span>Team</span></h2></Link>
                <Link href='#JoinUs'><h2 className={styles.navButtons}><span>Join Us</span></h2></Link>
                <Link href='#ContactUs'><h2 className={styles.navButtons}><span>Contact Us</span></h2></Link>
                <Link href='/contest'><h2 className={styles.navButtons}><span>Contest</span></h2></Link>
                </div>
            </div>
        </div>
        <div className={styles.header_video}>
        {/* <iframe
          src="https://www.youtube.com/embed/nmNoeavUJp4?autoplay=1&mute=1&showinfo=0&controls=0"
          allow=" autoplay; encrypted-media; gyroscope; picture-in-picture,muted"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe> */}
        <div className={styles.steamPurchase}>
          <Image src={colony} height={500} width={500} alt='Colony'/>
          <button><Link href="https://store.steampowered.com/app/3194950/Colony/">Buy Now</Link></button>
        </div>
        <video height="100%" width="100%" autoPlay muted loop>
          
          <source src="https://sparkling-kulfi-f5fdd7.netlify.app/Colony.mp4" />
          Your browser does not support the video tag...
        </video>
        </div>
    </div>
  );
}
