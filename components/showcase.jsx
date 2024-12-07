import Image from 'next/image';
import styles from './showcase.module.css'
import colony from '../public/colony.webp'
import Link from 'next/link';
export default function Showcase() {
  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.showcaseContainerContent}>
        <div className={styles.showcaseContainerVideo}>
          <h2>Gamer Genesis Studio<br/>Showcase</h2>
          <Image src={colony} alt='Colony' height={150}/>
        </div>
        <div className={styles.showcaseContainerVideo}>
        
          
          <Link className={styles.showcaseVideo} href='https://www.youtube.com/watch?v=nmNoeavUJp4'>
          <video height="100%" width="100%" autoPlay muted loop>
            <source src="https://sparkling-kulfi-f5fdd7.netlify.app/Colony.mp4" />
            <button>Helo</button>
            Your browser does not support the video tag...
          </video>
        </Link>
          
        </div>
      </div>
      
    </div>
  );
}
