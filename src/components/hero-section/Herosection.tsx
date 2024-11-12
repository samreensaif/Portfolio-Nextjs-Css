"use client"


import React, { useEffect } from 'react'
import style from "./Herosection.module.css"
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { SiToptal } from "react-icons/si";
import {  merriweather, sourGummy } from '@/font';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Herosection() {




  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 2500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);



  return (
    <div className={style.hero}>

    <h1 data-aos="fade-right" data-aos-delay="600" style={{ fontFamily: merriweather.style.fontFamily }}>Hey! I&apos;m <span className={style.color} style={{ fontFamily: sourGummy.style.fontFamily }}>SAMREEN SAIF.</span><br />A Frontend Web Developer.</h1>
    
    
    <p data-aos="fade-left" data-aos-delay="1000"style={{ fontFamily: merriweather.style.fontFamily }}>I can build user interface for web sites and applications with React JS and Next.Js <br />
    I love the front end development.</p>
    
    
    <a href="/contact">


    <button data-aos="zoom-in" data-aos-delay="1400">Hire Me </button>
    </a>



    <div data-aos="zoom-in" data-aos-delay="2000" className={style.icons}>
        <a
          href="https://www.facebook.com/samreen.saif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF color={"#6c584c"}  className={style.size} />
        </a>

        <a
          href="https://www.instagram.com/samreen_saif4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare color={"#6c584c"}  className={style.size} />
        </a>

        <a
          href="https://www.github.com/samreensaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color={"#6c584c"}  className={style.size} />
        </a>

        <a
          href="https://www.vercel.com/samreensaif-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel color={"#6c584c"}  className={style.size} />
        </a>

        <a
          href="https://www.linkedin.com/in/samreen-saif-16141027a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn color={"#6c584c"}  className={style.size} />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter color={"#6c584c"}  className={style.size} />
        </a>
      </div>


    
    <div className={style.bottomDiv}>


    <SiFiverr  size={130} color="#ADC178"/> 
    <FaUpwork size={80} className={style.mb} color="#ADC178"/>
    <SiFreelancer size={80} className={style.mb} color="#ADC178"/>
    <SiToptal size={80} className={style.mb} color="#ADC178"/>

    
   
    </div>

    </div>
  )
}

export default Herosection