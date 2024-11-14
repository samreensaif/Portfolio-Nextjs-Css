"use client"

import React, { useEffect } from 'react'
import style from "./Testimonials.module.css"
import { dancingScript } from '@/font'
import Image from 'next/image'
import {review} from "@/constant/review"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonials() {


    useEffect(() => {
        AOS.init({
          // Customize options here
          duration: 2000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);


  return (
    <div className={style.testimonials}>
        
        <h1 data-aos="zoom-in" data-aos-delay="200" style={{ fontFamily: dancingScript.style.fontFamily }}>What Other People Say</h1>

        <div data-aos="zoom-in" data-aos-delay="200" className={style.myWork}>


{review.map((item)=>{

return(

<div className={style.card} key={item.id}>

<div className={style.img}>
    <Image src={item.image} alt="reviw1" width={150} height={150} className={style.image}>

    </Image>
</div>
<div className={style.content}>

    <h1>{item.name}</h1>
    <p>{item.profession}</p>
    <p>{item.desc}</p>
</div>

</div>





)




})}



            


        </div>

   
    </div>
  )
}

export default Testimonials
