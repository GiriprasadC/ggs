import Image from 'next/image';
import styles from './goal.module.css'
import logo from '../public/GGS_Logo.png'
export default function OurGoal() {
  return (
    <div className={styles.goalContainer}>
        <div className={styles.goalOne}>
            <h2>Our Goal</h2>
            <h3>The Aim of the Gamer Genesis Studio is to develop high quality games<br/> and encourage the Healthy Gaming Community</h3>
        </div>
        <div className={styles.goalTwo}>
            <Image height="100%" width="100%" alt='Gamer Genesis Studio Logo' src={logo}/>
        </div>
    </div>
  );
}
