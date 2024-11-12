"use client"


import React, { useEffect } from 'react'
import style from "./Services.module.css"
import { PiPaintBrushFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { RiGitBranchLine } from "react-icons/ri";
import { CgDebug } from "react-icons/cg";
import Card from '@/components/card/Card';
import { dancingScript, merriweather } from '@/font';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {

  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);



  return (
    <div className={style.services}>


        <div className={style.topDiv}>
            <h1 data-aos="zoom-in" style={{ fontFamily: dancingScript.style.fontFamily }}>My Services</h1>
            <p data-aos="fade-right" style={{ fontFamily: merriweather.style.fontFamily }}>As a frontend developer, I specialize in creating responsive, user-friendly websites with optimized performance. I focus on <br /> UI design, integration, debugging, accessibility, and continuous improvement to ensure seamless user experiences.
            </p>
        </div>



        <div className={style.margin}>
        <div  className={style.bottomDiv}>

        <div data-aos="flip-right" data-aos-delay="400">
        <Card  img={<PiPaintBrushFill  size={80} color="#6C584C" className={style.icon}/>} title="UI Design" desc="Converting Figma, XD, or Sketch designs to responsive HTML/CSS/JS."/>
        </div>

        <div data-aos="flip-right" data-aos-delay="800">
        <Card img={<IoRocketSharp   size={80} color="#6C584C" className={style.icon}/>} title="Optimization" desc="Minify HTML, CSS, and JavaScript, implement loading, and optimize images for faster websites."/>
        </div>

        <div data-aos="flip-right" data-aos-delay="1200">
        <Card img={<RiGitBranchLine   size={80} color="#6C584C" className={style.icon}/>} title="Versioning" desc="Using version control systems like Github to track changes and collaborate."/>
        </div>
        <div data-aos="flip-right" data-aos-delay="1600">
        <Card img={<CgDebug   size={80} color="#6C584C" className={style.icon}/>} title="Debugging" desc=" Writing tests for individual components using frameworks like Jest or React Testing Library."/>
        </div>


        </div>


        </div>
    </div>
  )
}

export default Services
