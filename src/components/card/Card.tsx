import React from 'react'
import style from "./Card.module.css"
import { merriweather } from '@/font';



interface CardProps {   
    img: React.ReactNode;
    title: string;
    desc: string;
}


function Card( props: CardProps) {
  return (
    <div>
        
        <div className={style.card}>

<div className={style.img}>

{props.img}

</div>

<div className={style.content} style={{ fontFamily: merriweather.style.fontFamily }}>

    <h1 >{props.title}</h1>
    <p>{props.desc}</p>
</div>


</div>
    </div>
  )
}

export default Card