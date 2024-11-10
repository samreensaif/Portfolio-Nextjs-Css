import React from 'react'
import style from "./Herosection.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { SiToptal } from "react-icons/si";


function Herosection() {
  return (
    <div className={style.hero}>

    <h1>Hey! I&apos;m <span className={style.color} style={{fontWeight:"bold"}}>SAMREEN SAIF.</span><br /><span className={style.color}> I</span>&apos;m <span className={style.color}>A F</span>rontend <span className={style.color}>W</span>eb <span className={style.color}>D</span>eveloper.</h1>
    
    
    <p>I can build user interface for web sites and applications with React JS and Next.Js <br />
    I love the front end development.</p>
    
    
    <button>Hire Me</button>

    <div className={style.icons}>

    <FaFacebookF color={"#6c584c"} size={30}/>
    <FaInstagramSquare color={"#6c584c"} size={30}/>
    <FaGithub color={"#6c584c"} size={30}/>
    <SiVercel color={"#6c584c"} size={30}/>
    <FaLinkedinIn color={"#6c584c"} size={30}/>
    <FaTwitter color={"#6c584c"} size={30}/>

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