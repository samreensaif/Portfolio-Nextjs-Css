 import React from 'react'

 import style from "./Footer.module.css"
 
 function Footer() {
   return (
     <div className={style.footer}>


        <div className={style.container}>
            <p>Developed and Designed by <a href="https://github.com/samreensaif.git" target="_blank" className={style.link}>Samreen Saif</a></p>
            <p>&copy; All Rights Reserved by Samreen Saif</p>
        </div>
    

     </div>
   )
 }
 
 export default Footer