"use client";

import React from "react";
import style from "./Services.module.css";
import { PiPaintBrushFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { RiGitBranchLine } from "react-icons/ri";
import { CgDebug } from "react-icons/cg";
import Card from "@/components/card/Card";
import { dancingScript, merriweather } from "@/font";
import { motion } from "framer-motion";


function Services() {
  return (
    <div className={style.services}>
      <div className={style.topDiv}>
        <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>
          My Services
        </h1>
        <p style={{ fontFamily: merriweather.style.fontFamily }}>
          As a frontend developer, I specialize in creating responsive,
          user-friendly websites with optimized performance. I focus on <br />{" "}
          UI design, integration, debugging, accessibility, and continuous
          improvement to ensure seamless user experiences.
        </p>
      </div>

      <div className={style.margin}>

        <div className={style.bottomDiv}>

          <motion.div
          
          initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:1}}
          
          >
            <Card
              img={
                <PiPaintBrushFill
                  
                  color="#6C584C"
                  className={style.icon}
                />
              }
              title="UI Design"
              desc="Converting Figma, XD, or Sketch designs to responsive HTML/CSS/JS."
            />
          </motion.div>

          <motion.div
           initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}}  transition={{duration:1,delay:1}}
          >
            <Card
              img={
                <IoRocketSharp
                  
                  color="#6C584C"
                  className={style.icon}
                />
              }
              title="Optimization"
              desc="Minify HTML, CSS, and JavaScript, implement loading, and optimize images for faster websites."
            />
          </motion.div>

          <motion.div
           initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:1,delay:2}}
          >
            <Card
              img={
                <RiGitBranchLine
                  
                  color="#6C584C"
                  className={style.icon}
                />
              }
              title="Versioning"
              desc="Using version control systems like Github to track changes and collaborate."
            />
          </motion.div>


          <motion.div
           initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}}  transition={{duration:1,delay:3}}
          
          >
            <Card
              img={<CgDebug  color="#6C584C" className={style.icon} />}
              title="Debugging"
              desc=" Writing tests for individual components using frameworks like Jest or React Testing Library."
            />
          </motion.div>

        </div>
        
      </div>

    </div>
  );
}

export default Services;
