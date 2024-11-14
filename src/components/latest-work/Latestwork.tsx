"use client"


import React, { useEffect } from 'react'
import style from "./Latestwork.module.css"; 
import { dancingScript, merriweather } from '@/font';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Latestwork() {


  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);



  return (
    <div className={style.latest}>

        <h1 data-aos="zoom-in" data-aos-delay="200" style={{ fontFamily: dancingScript.style.fontFamily }}>My Latest Work</h1>

        <p data-aos="fade-up" data-aos-delay="200" style={{ fontFamily: merriweather.style.fontFamily }}>I&apos;ve just built and deployed a stylish and functional e-commerce webpage using <strong>Next.js</strong> and <strong>custom CSS</strong>. The site features both <strong>static</strong> and <strong>dynamic routing</strong>, allowing users to seamlessly navigate through products and easily <strong>add to cart</strong> with a real-time update of the product count! 🛒✨</p>

        <div data-aos="zoom-in" data-aos-delay="200" className={style.container}>

                <video src="/video/video.mp4" controls={true} loop={true}></video>



        </div>

      </div>
  )
}

export default Latestwork