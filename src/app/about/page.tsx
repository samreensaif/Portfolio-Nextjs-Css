"use client"


import React, { useEffect } from 'react'
import style from "./About.module.css";
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { dancingScript, merriweather } from "@/font"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <div className={style.about}>
        <div className={style.textDiv}>
          <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif</h1>
          <p style={{ fontFamily: merriweather.style.fontFamily }}>Freelance Web Developer</p>

          <p className={style.font} style={{ fontFamily: merriweather.style.fontFamily }}>
            I can build user interface for web sites and applications with React
            JS and Next.Js I love the front end development. I am a self learner
            and I am always looking to learn more about the field of web
            development.
          </p>

          <button>Contact Me</button>
        </div>
        <div data-aos="zoom-in" className={style.imageDiv}>
          <Image
            src="/avatar.webp"
            alt="Image"
            width={400}
            height={400}
            className={style.img}
          ></Image>
        </div>
      </div>

      <div className={style.bottomDiv}>
        <FaHtml5 size={80} color="#ADC178" />
        <FaCss3Alt size={80} color="#ADC178" />
        <RiNextjsFill size={80} color="#ADC178" />
        <RiTailwindCssFill size={80} color="#ADC178" />
        <IoLogoJavascript size={80} color="#ADC178" />
        <BiLogoTypescript size={80} color="#ADC178" />
        <SiShadcnui size={80} color="#ADC178" />
        <FaBootstrap size={80} color="#ADC178" />
      </div>
    </div>
  );

}

export default About