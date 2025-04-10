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
import { AiOutlinePython } from 'react-icons/ai';
import { BsDatabaseDown } from 'react-icons/bs';
import { SiFastapi } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";



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
    <div className={style.container}>
      <div className={style.about}>



        <motion.div  className={style.textDiv}
      initial={{ opacity: 0 , x: -100 }}
      whileInView={{ opacity: 1 , x: 0 }}
      transition={{ duration: 2.5 , type:'spring'}}
        
        >
          <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif</h1>
          <p style={{ fontFamily: merriweather.style.fontFamily }}>Freelance Web Developer</p>

          <p className={style.font} style={{ fontFamily: merriweather.style.fontFamily }}>
          "Junior Full Stack Developer with hands-on experience in building modern web applications 
          using React.js and Next.js on the front end, and Python, FastAPI, and Streamlit on the back end. 
          Skilled in creating clean, responsive user interfaces and developing scalable, data-driven 
          solutions. Proficient in working with PostgreSQL, MySQL, and MongoDB databases, with experience 
          integrating Sanity as a headless CMS. Passionate about continuous learning and committed to delivering 
          efficient, user-focused applications through collaboration and innovation."
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
          <FaHtml5 className={style.size} color="#ADC178" />
        </motion.div>
        
        <motion.div variants={itemVariants}>
        <FaCss3Alt className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <RiNextjsFill className={style.size} color="#ADC178" />
        </motion.div>


        <motion.div variants={itemVariants}>
        <RiTailwindCssFill className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <IoLogoJavascript className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <BiLogoTypescript className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <SiShadcnui className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <FaBootstrap className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <AiOutlinePython className={style.size} color="#ADC178" />
        </motion.div>
        
        <motion.div variants={itemVariants}>
        <BsDatabaseDown className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <SiStreamlit className={style.size} color="#ADC178" />
        </motion.div>

        <motion.div variants={itemVariants}>
        <SiFastapi className={style.size} color="#ADC178" />
        </motion.div>

      </motion.div>
    </div>
  );

}

export default About