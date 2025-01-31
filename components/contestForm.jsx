'use client'
import styles from './contestForm.module.css'
import { useState } from 'react';
export default function ContactUs() {
  const [name,setName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [emailId,setEmailId] = useState('');
  const [gameplayLink,setGameplayLink] = useState('');
  
  function sendMessage() {
    const webhookUrl = "https://discord.com/api/webhooks/1334929752154308690/a2RMhoXf_FreQ6IPkEwZtTvO7J8G3bfcMeSF6QVSxFZFpqq4EuHffKwq4V_eEIIoeMUo";

    const payload1 = {
        username: emailId,
        avatar_url: "https://cdn.discordapp.com/attachments/1223978870504685679/1232259311258964018/GGS_LOGO.png",
        content: `**Name** : ${name}\n**Phone Number** : ${phoneNumber}\n**Email Address** : ${emailId}\n**Gameplay Link** : <${gameplayLink}>\n\n===========================================================================`,
    };

    function sendPayload(payload) {
        const request = new XMLHttpRequest();
        request.open("POST", webhookUrl);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(payload));
    }
    sendPayload(payload1);
  }
  const handleNameChange = (event) => {
    const value = event.target.value;
    // Allow only alphabets and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };
  
  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numbers, limit to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };
  
  const handleEmailAddressChange = (event) => {
    const value = event.target.value;
    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(value)) {
      setEmailId(value);
    }
  };
  
  const handleGameplayLink = (event) => {
    const value = event.target.value;
    // Validate URL format
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (urlRegex.test(value)) {
      setGameplayLink(value);
    }
  };
  


  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailId('')
    
    sendMessage();
  };
  return (
    <div id='ContactUs' className={styles.contactContainer}>
      <div className={styles.contactUs}>
      <h2>Contest</h2>
      <div className={styles.contactContainerContent}>
        <div className={styles.contactContainerForm}>
          <form onSubmit={handleSubmit}>
          <div className={styles.field}><h4>Name : </h4><input placeholder='Enter your Email' type='text' onChange={handleNameChange} required value={name}/></div>
          <div className={styles.field}><h4>Phone Number</h4><input placeholder='Enter your Phone Number' type='text' onChange={handlePhoneNumberChange} required value={phoneNumber}/></div>
          <div className={styles.field}><h4>Email Address</h4><input placeholder='Enter your Email Address' type='email' onChange={handleEmailAddressChange} required value={emailId}/></div>
          <div className={styles.field}><h4>Gameplay Link</h4><input placeholder='Enter your Gameplay Link' type='text' onChange={handleGameplayLink} required value={gameplayLink}/></div>
          <button className={styles.submitField}>Submit</button>
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
