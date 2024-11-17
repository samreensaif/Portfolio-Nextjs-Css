"use client"

import React, { useRef } from 'react'
import style from "./Testimonials.module.css"
import { dancingScript } from '@/font'
import Image from 'next/image'
import {review} from "@/constant/review"
import { motion,useMotionValue, useTransform } from 'framer-motion'


function Testimonials() {

  return (
    <div className={style.testimonials}>
        
        <h1  style={{ fontFamily: dancingScript.style.fontFamily }}>What Other People Say</h1>

        <div  className={style.myWork}>


{review.map((item,index)=>{

return (

  <Card item={item} key={index}/>
  
);
})}
    </div>
    </div>
  )
}

// card component

function Card({item}:{item:{name:string,profession:string,desc:string,image:string}}){


  const cardRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);



  const handelMouseMove =(e:React.MouseEvent<HTMLDivElement>)=>{
    
    if(!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  }




  const handelMouseLeave=()=>{
    mouseX.set(0);
    mouseY.set(0);
  }

  
  return(
    <motion.div className={style.card} 
    
    ref={cardRef}
    style ={{perspective:1000, rotateX:rotateX,rotateY:rotateY}}
    
    onMouseMove={handelMouseMove}

    onMouseLeave={handelMouseLeave}
    >
    <div className={style.img}>
      <Image
        src={item.image}
        alt="reviw1"
        width={150}
        height={150}
        className={style.image}
      ></Image>
    </div>
    <div className={style.content}>
      <h1>{item.name}</h1>
      <p>{item.profession}</p>
      <p>{item.desc}</p>
    </div>
  </motion.div>
  )

}

export default Testimonials
