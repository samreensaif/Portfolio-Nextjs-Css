"use client"


import React from 'react'
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
import { dancingScript, merriweather } from "@/font";
import { motion } from "framer-motion";



const containerVariants = {
  hidden: {},

  show: {
    
    transition: {
      staggerChildren: 0.7,
    }
  }
}

const itemVariants ={
  hidden:{
    opacity:0,
    y:50
  },
  show:{
    opacity:1,
    y:0
  }
}





function About() {
    return (
    <div>
      <div className={style.about}>



        <motion.div  className={style.textDiv}
      initial={{ opacity: 0 , x: -100 }}
      whileInView={{ opacity: 1 , x: 0 }}
      transition={{ duration: 2.5 , type:'spring'}}
        
        >
          <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif</h1>
          <p style={{ fontFamily: merriweather.style.fontFamily }}>Freelance Web Developer</p>

          <p className={style.font} style={{ fontFamily: merriweather.style.fontFamily }}>
            I can build user interface for web sites and applications with React
            JS and Next.Js I love the front end development. I am a self learner
            and I am always looking to learn more about the field of web
            development.
          </p>
          <a href="/contact">
          <button>Contact Me</button>
          </a>
        </motion.div>


        <motion.div  className={style.imageDiv}
        initial={{ opacity: 0 , x: 100 }}
        whileInView={{ opacity: 1 , x: 0 }} 
        transition={{ duration: 2.5 , type:'spring'}}
        
        >
          <Image
            src="/avatar.webp"
            alt="Image"
            width={400}
            height={400}
            className={style.img}
          ></Image>
        </motion.div>



      </div>


      <motion.div className={style.bottomDiv} 
      variants={containerVariants}
      initial='hidden'
      whileInView='show'>

        
        <motion.div variants={itemVariants}>
          <FaHtml5 size={80} color="#ADC178" />
        </motion.div>
        
        <motion.div variants={itemVariants}>
        <FaCss3Alt size={80} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <RiNextjsFill size={80} color="#ADC178" />
        </motion.div>


        <motion.div variants={itemVariants}>
        <RiTailwindCssFill size={80} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <IoLogoJavascript size={80} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <BiLogoTypescript size={80} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <SiShadcnui size={80} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <FaBootstrap size={80} color="#ADC178" />
        </motion.div>

      </motion.div>
    </div>
  );

}

export default About