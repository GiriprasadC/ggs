import Image from 'next/image';
import styles from './team.module.css'
import jv from '../public/jayavighnesh.webp'
import pwg from '../public/pwg.webp'
import punidhan from '../public/punidhan.webp'
import sgt from '../public/sgt.webp'
import dokku from '../public/dokku.webp'
import shiva from '../public/shiva.webp'
import sbri from '../public/sbri.webp'
import baba from '../public/baba.webp'
import venkat from '../public/venkat.webp'
import youtube from '../public/youtube.webp'
import linkedin from '../public/linkedin.webp'
import instagram from '../public/instagram.webp'
import facebook from '../public/facebook.webp'
import x from '../public/x.webp'
import Link from 'next/link';
export default function OurTeam() {
  let team = {
    giriprasad:{
      name:"Giri Prasad",
      role:"Creative Head",
      image:pwg,
      imagealt:"",
      linkedIn:"https://www.linkedin.com/in/giri-prasad-c-79a52b243/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      x:"",
      instagram:"https://www.instagram.com/pwg_giri/",
      facebook:"",
      youtube:""
    },
    punidhan:{
      name:"Punidhan R",
      role:"Game Programmer",
      image:punidhan,
      imagealt:"",
      linkedIn:"https://www.linkedin.com/in/punithan-r-b338a8231/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      x:"",
      instagram:"https://www.instagram.com/punidhan.ceo",
      facebook:"",
      youtube:""
    },
    sgt:{
      name:"Kathiresh D",
      role:"3D Artist",
      image:sgt,
      imagealt:"",
      linkedIn:"https://www.linkedin.com/in/kathiresh-d-981852251/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      x:"",
      instagram:"https://www.instagram.com/storygamer_tamil/?utm_source=qr&r=nametag",
      facebook:"",
      youtube:"https://www.youtube.com/channel/UCNr1w75RYOPScaRD2hlqG8w"
    },
    dokku:{
      name:"Kiran Kumar",
      role:"Marketing Lead",
      image:dokku,
      imagealt:"",
      linkedIn:"",
      x:"",
      instagram:"https://www.instagram.com/the_dokku_gamer?utm_source=qr",
      facebook:"",
      youtube:"https://www.youtube.com/@CaptainDokku"
    },
    jv:{
      name:"Jayavighnesh B K",
      role:"Web Developer",
      image:jv,
      imagealt:"Jayavignesh",
      linkedIn:"https://www.linkedin.com/in/jayavighnesh-b-k-ba7b45307/",
      x:"https://x.com/iamjv404",
      instagram:"https://www.instagram.com/i__am__jv/",
      facebook:"",
      youtube:"https://www.youtube.com/channel/UCtaxB_oesuCVYGOr1lQnOvQ"
    },
    sbri:{
      name:"Sabarivasan M",
      role:"Executive Producer",
      image:sbri,
      imagealt:"",
      linkedIn:"",
      x:"",
      instagram:"https://www.instagram.com/sabari__2602",
      facebook:"",
      youtube:""
    },
    shiva:{
      name:"Shivanand R",
      role:"Producer",
      image:shiva,
      imagealt:"",
      linkedIn:"https://www.linkedin.com/in/shivanand-rajendran-7b1a3429b/",
      x:"",
      instagram:"https://www.instagram.com/rock_stone_shiva/",
      facebook:"",
      youtube:"https://www.youtube.com/@ThanjaiGaming"
    },
    baba:{
      name:"Baba Krishnan S",
      role:"Game Tester",
      image:baba,
      imagealt:"",
      linkedIn:"https://www.linkedin.com/in/baba-krishnan-s-7418522a3/",
      x:"",
      instagram:"https://www.instagram.com/bumble_babu/",
      facebook:"",
      youtube:"https://www.youtube.com/@BumbleBabu"
    },
    venkat:{
      name:"Venkatasubramanian",
      role:"Music & Audio",
      image:venkat,
      imagealt:"",
      linkedIn:"",
      x:"",
      instagram:"https://www.instagram.com/venkat_music",
      facebook:"",
      youtube:"https://www.youtube.com/channel/UCgtSYLfsQKYPlGLfQAiJvwg"
    },


  }
  

  return (
    <div id='Team' className={styles.teamContainer}>
      <h2>Our Team</h2>
      <div className={styles.teamCards}>
      {Object.keys(team).map((key) => (
          <div className={styles.teamCard} key={key}>
            <Image
              className={styles.teamPicture}
              src={team[key].image}
              alt={team[key].imagealt || team[key].name}
              height={400}
              width={400}
            />
            <h3>{team[key].name}</h3>
            <h4>{team[key].role}</h4>
            <div className={styles.socialLinks}>
              {team[key].linkedIn && (
                <Link href={team[key].linkedIn}>
                  <Image
                    className={styles.socialImage}
                    src={linkedin}
                    alt={`${team[key].name} LinkedIn`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].x && (
                <Link href={team[key].x}>
                  <Image
                    className={styles.socialImage}
                    src={x}
                    alt={`${team[key].name} X`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].instagram && (
                <Link href={team[key].instagram}>
                  <Image
                    className={styles.socialImage}
                    src={instagram}
                    alt={`${team[key].name} Instagram`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].facebook && (
                <Link href={team[key].facebook}>
                  <Image
                    className={styles.socialImage}
                    src={facebook}
                    alt={`${team[key].name} Facebook`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].youtube && (
                <Link href={team[key].youtube}>
                  <Image
                    className={styles.socialImage}
                    src={youtube}
                    alt={`${team[key].name} YouTube`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      {Object.keys(team).map((key) => (
          <div className={styles.teamCard} key={key}>
            <Image
              className={styles.teamPicture}
              src={team[key].image}
              alt={team[key].imagealt || team[key].name}
              height={400}
              width={400}
            />
            <h3>{team[key].name}</h3>
            <h4>{team[key].role}</h4>
            <div className={styles.socialLinks}>
              {team[key].linkedIn && (
                <Link href={team[key].linkedIn}>
                  <Image
                    className={styles.socialImage}
                    src={linkedin}
                    alt={`${team[key].name} LinkedIn`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].x && (
                <Link href={team[key].x}>
                  <Image
                    className={styles.socialImage}
                    src={x}
                    alt={`${team[key].name} X`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].instagram && (
                <Link href={team[key].instagram}>
                  <Image
                    className={styles.socialImage}
                    src={instagram}
                    alt={`${team[key].name} Instagram`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].facebook && (
                <Link href={team[key].facebook}>
                  <Image
                    className={styles.socialImage}
                    src={facebook}
                    alt={`${team[key].name} Facebook`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
              {team[key].youtube && (
                <Link href={team[key].youtube}>
                  <Image
                    className={styles.socialImage}
                    src={youtube}
                    alt={`${team[key].name} YouTube`}
                    height={100}
                    width={100}
                  />
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* <div className={styles.teamCard}>  
          <Image className={styles.teamPicture} src={jv} alt='jayavignesh' height={400} width={400}/>
          <h3>Jayavighnesh B K</h3>
          <h4>Web Developer</h4>
          <div className={styles.socialLinks}>
            <Link href='https://itsmejv.in/'><Image className={styles.socialImage} src={linkedin} alt='jayavignesh' height={100} width={100}/></Link>
            <Link href='https://itsmejv.in/'><Image className={styles.socialImage} src={x} alt='jayavignesh' height={100} width={100}/></Link>
            <Link href='https://itsmejv.in/'><Image className={styles.socialImage} src={instagram} alt='jayavignesh' height={100} width={100}/></Link>
            <Link href='https://itsmejv.in/'><Image className={styles.socialImage} src={facebook} alt='jayavignesh' height={100} width={100}/></Link>
            <Link href='https://itsmejv.in/'><Image className={styles.socialImage} src={youtube} alt='jayavignesh' height={100} width={100}/></Link>
          </div>
        </div> */}



      </div>
      
    </div>
  );
}
