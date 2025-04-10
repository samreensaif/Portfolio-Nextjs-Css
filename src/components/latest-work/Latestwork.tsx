"use client"


import React from 'react'
import style from "./Latestwork.module.css"; 
import { dancingScript, merriweather } from '@/font';
import {motion} from 'framer-motion'


function Latestwork() {



  return (
    <div className={style.latest}>

        <h1  style={{ fontFamily: dancingScript.style.fontFamily }}>My Latest Work</h1>

        <p  style={{ fontFamily: merriweather.style.fontFamily }}>I&apos;ve just built and deployed a stylish and functional e-commerce webpage using <strong>Next.js</strong> and <strong>custom CSS</strong>. The site features both <strong>static</strong> and <strong>dynamic routing</strong>, allowing users to seamlessly navigate through products and easily <strong>add to cart</strong> with a real-time update of the product count! 🛒✨</p>

        <motion.div  className={style.container}
        style={{ marginBottom: "2rem" }}
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}}
        >

                <video src="/video/video.mp4" controls={true} loop={true}></video>



        </motion.div>

      

        <motion.div  className={style.container}
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}}
        >

                <video src="/video/fastApi.mp4" controls={true} loop={true}></video>



        </motion.div>

      </div>
  )
}

export default Latestwork