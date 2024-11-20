"use client"


import React from 'react'
import style from "./Herosection.module.css"
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { SiToptal } from "react-icons/si";
import {  merriweather, rajdhaniFont } from '@/font';
import { Typewriter } from 'react-simple-typewriter'
import {motion} from 'framer-motion';
import { FaDribbble } from "react-icons/fa";
import Image from 'next/image';



function Herosection() {


  return (

    <div className={style.hero}>

    <h1 style={{ fontFamily: merriweather.style.fontFamily }}>Hey! I&apos;m 


    <div >
      <span className={style.color} style={{ fontFamily: rajdhaniFont.style.fontFamily }}>SAMREEN SAIF.</span>
      {" "}
      <motion.span 
      
      animate={{rotate: [0, 25, 0, -25,0]}}
      transition={{duration:0.5 , repeat: Infinity , ease: "linear"}}
      
      className={style.emoji}>
      
      👋</motion.span>
      
      </div>
      
      
      <Typewriter
      words={['A Frontend Web Developer.','UI/UX Designer.','A Coding Enthusiast.']}
      loop={0}
      cursor={true}
      cursorStyle='_'
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
      />
      </h1>
    
    
    <p style={{ fontFamily: merriweather.style.fontFamily }}>I can build user interface for web sites and applications with React JS and Next.Js <br />
    I love the front end development.</p>
    
    
    <a href="/contact">


    <button >Hire Me </button>
    </a>



    <div  className={style.icons}>
        <motion.a

        whileHover={{rotate:360}}
        transition={{duration:1}}


          href="https://www.facebook.com/samreen.saif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF color={"#6c584c"}  className={style.size} />
        </motion.a>

        <motion.a

          whileHover={{rotate:360}}
          transition={{duration:1}}
          href="https://www.instagram.com/samreen_saif4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare color={"#6c584c"}  className={style.size} />
        </motion.a>

        <motion.a

whileHover={{rotate:360}}
transition={{duration:1}}
          href="https://www.github.com/samreensaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color={"#6c584c"}  className={style.size} />
        </motion.a>

        <motion.a
                    whileHover={{rotate:360}}
                    transition={{duration:1}}
          href="https://www.vercel.com/samreensaif-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel color={"#6c584c"}  className={style.size} />
        </motion.a>

        <motion.a
                    whileHover={{rotate:360}}
                    transition={{duration:1}}
          href="https://www.linkedin.com/in/samreen-saif-16141027a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color={"#6c584c"}  className={style.size} />
        </motion.a>

        <motion.a
                    whileHover={{rotate:360}}
                    transition={{duration:1}}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color={"#6c584c"}  className={style.size} />
        </motion.a>
      </div>


    
    <div className={style.bottomDiv}>

    <Image src="/fiver.png" alt="fiverr" width={100} height={100} className={style.fiver}></Image>
    
    <FaUpwork className={style.size}  color="#ADC178"/>
    <FaDribbble className={style.size}  color="#ADC178"/>
    <SiFreelancer className={style.size}  color="#ADC178"/>
    <SiToptal className={style.size}  color="#ADC178"/>

    
   
    </div>

    </div>
  )
}

export default Herosection