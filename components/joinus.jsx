import Image from 'next/image';
import styles from './team.module.css'
import ue from '../public/ue.webp'
import max from '../public/max.webp'
import blender from '../public/blender.webp'
import Link from 'next/link';
export default function JoinUs() {

  return (
    <div id='JoinUs' className={styles.joinUs}>
      <h2>Join Us</h2>
      <div className={styles.positionsOpen}>
        <div className={styles.positionCard}>
          <Image src={ue} alt='Unreal Engine' height={300} width={300}/>
          <h3>Unreal Engine</h3>
          <h4>Full Time / Internship</h4>
          <button>Apply Now</button>
        </div>
        <div className={styles.positionCard}>
          <Image src={blender} alt='Blender' height={300} width={300}/>
          <h3>Blender</h3>
          <h4>Full Time / Internship</h4>
          <button>Apply Now</button>
        </div>
        <div className={styles.positionCard}>
          <Image src={max} alt='3Ds Max' height={300} width={300}/>
          <h3>3Ds Max</h3>
          <h4>Full Time / Internship</h4>
          <button>Apply Now</button>
        </div>
      </div>
      <h2>Want to be a Investor ? <span><Link href='https://google.com/'>Click Here</Link></span></h2>
      
    </div>
  );
}
