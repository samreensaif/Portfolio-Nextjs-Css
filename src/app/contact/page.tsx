"use client"

import React from "react";
import style from "./Contact.module.css";
import { dancingScript, merriweather } from "@/font";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";


import { sendEmail } from "@/utils/emailService";
import { motion } from "framer-motion";

function Contact() {


const [name,setName]=React.useState("");
const [email,setEmail]=React.useState("");
const [message,setMessage]=React.useState("");


const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const templateParams = {
    to_name:"Samreen Saif",
    from_name:name,
    from_email:email,
    message:message
  };


  try{
    await sendEmail(templateParams);
    alert("Email sent successfully");
    setName("");
    setEmail("");
    setMessage("");
  }catch(error){
    console.error("Failed to send email:", error);
    alert("Failed to send email");
  }
}



  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.formDiv}>
          <div className={style.contactTitle}>
            <h1  style={{ fontFamily: dancingScript.style.fontFamily }}>
              Connect With Me
            </h1>
            <p  style={{ fontFamily: merriweather.style.fontFamily }}>Let&apos;s turn your vision into reality—shoot me a message!</p>
          </div>

          <div>
            <form onSubmit={handleSubmit}  className={style.contactForm}>
              <label htmlFor="fname"> Name: </label>
              <input
                className={style.inputField}
                type="text"
                id="fname"
                name="name"
                value={name}
                autoComplete="off"
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />


              
              <label htmlFor="email">Email Address:</label>
              <input
                className={style.inputField}
                type="email"
                id="email"
                name="email"
                value={email}
                autoComplete="off"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />


              <label htmlFor="subject">Subject:</label>
              <input
                className={style.inputField}
                type="text"
                id="lname"
                name="lname"
                autoComplete="off"
                placeholder="Subject"
                required
              />


              <label htmlFor="message">Message:</label>
              <textarea
                className={style.inputField}
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              ></textarea>
              <a href="/contact">
              <button type="submit">Submit</button>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div  className={style.icn}>
        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.facebook.com/samreen.saif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF  className={style.size} />
        </motion.a>

        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.instagram.com/samreen_saif4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare  className={style.size} />
        </motion.a>

        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.github.com/samreensaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub  className={style.size} />
        </motion.a>

        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.vercel.com/samreensaif-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel  className={style.size} />
        </motion.a>

        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.linkedin.com/in/samreen-saif-16141027a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn  className={style.size} />
        </motion.a>

        <motion.a

        whileHover={{rotateY:180}}
        transition={{duration:1}}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter  className={style.size} />
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
