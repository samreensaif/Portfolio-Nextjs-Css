import React from 'react'
import style from "./Services.module.css"
import { PiPaintBrushFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { RiGitBranchLine } from "react-icons/ri";
import { CgDebug } from "react-icons/cg";
import Card from '@/components/card/Card';
import { dancingScript } from '@/font';

function Services() {
  return (
    <div className={style.services}>


        <div className={style.topDiv}>
            <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>My Services</h1>
            <p>As a frontend developer, I specialize in creating responsive, user-friendly websites with optimized performance. I focus on <br /> UI design, integration, debugging, accessibility, and continuous improvement to ensure seamless user experiences.
            </p>
        </div>

        <div className={style.bottomDiv}>


        <Card img={<PiPaintBrushFill  size={80} color="#6C584C" className={style.icon}/>} title="UI Design" desc="Translating design files (e.g., Figma, Adobe XD, Sketch) into responsive HTML, CSS, and JavaScript."/>

        <Card img={<IoRocketSharp   size={80} color="#6C584C" className={style.icon}/>} title="Optimization" desc="Minify HTML, CSS, and JavaScript, implement lazy loading, and optimize images for faster websites."/>

        <Card img={<RiGitBranchLine   size={80} color="#6C584C" className={style.icon}/>} title="Versioning" desc="Using version control systems like Git for tracking changes and collaborating with other developers."/>


        <Card img={<CgDebug   size={80} color="#6C584C" className={style.icon}/>} title="Debugging" desc=" Writing tests for individual components using frameworks like Jest or React Testing Library."/>






        </div>
    </div>
  )
}

export default Services
