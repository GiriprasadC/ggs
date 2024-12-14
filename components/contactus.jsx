'use client'
import styles from './contactus.module.css'
import instagram from '../public/instagram.webp'
import youtube from '../public/youtube.webp'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function ContactUs() {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  
  function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1317394561567428621/RIwI5YvBK1WqpuiDJ2uDSStRDitfBbJ2gucb2m05ujRIK2jq2hj_hA7mYBE2Or3KY5gt");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: email,
      avatar_url: "https://cdn.discordapp.com/attachments/1223978870504685679/1232259311258964018/GGS_LOGO.png",
      content: `**Email ID** : ${email}\n**Message** : ${message}`,
    }

    request.send(JSON.stringify(params));
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('')
    setMessage('')
    
    sendMessage();
  };
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
          <form onSubmit={handleSubmit}>
          <input placeholder='Enter your Email' type='email' onChange={handleEmailChange} value={email}/>
          <textarea placeholder='Enter your Queries' required onChange={handleMessageChange} value={message}></textarea><button type='submit' value="Submit">Submit</button>

          </form>
        </div>
      </div>

      </div>
      <div className={styles.footer}>
        COPYRIGHTS &copy; 2025, Gamer Genesis Studio, All Rights Reserved | Designed by JV
      </div>
    </div>
  );
}
