import Image from 'next/image';
import styles from './header.module.css'
import ggslogo from '@/public/GGS_Logo_Opti.webp'
import Link from 'next/link';
export default function GGSHeader() {
  return (
    <div id='Home' className={styles.header_container}>
        <div className={styles.header_navbar}>
            <div className={styles.navbarOne}>
                <Image height={80} width={80} src={ggslogo} alt='Gamer Genesis Studio Logo'/><h1>Gamer Genesis Studio <span>By Eucleia Entertainment</span></h1>
            </div>
            <div className={styles.navbarTwo}>
                <div className={styles.navLinks}>
                <Link href='/'><h2 className={styles.navButtons}><span>Home</span></h2></Link>
                <Link href='/#Team'><h2 className={styles.navButtons}><span>Team</span></h2></Link>
                <Link href='/#JoinUs'><h2 className={styles.navButtons}><span>Join Us</span></h2></Link>
                <Link href='/#ContactUs'><h2 className={styles.navButtons}><span>Contact Us</span></h2></Link>
                <Link href='/#ContactUs'><h2 className={styles.navButtons}><span>Contest</span></h2></Link>
                </div>
            </div>
        </div>
    </div>
  );
}
