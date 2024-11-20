 "use client";
import React from "react";
import style from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { dancingScript, merriweather } from "@/font"
import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setIsOpen(!isOpen);
  };


 
  return (
    <div>
      <nav  className={style.nav} >
        
          
          <h1  style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif.</h1>
       
        <AnimatePresence>
        
        {isOpen == true ?(

          <motion.div className={`${style.links} ${style.adjust}`} style={{ fontFamily: merriweather.style.fontFamily }} 
          key={"adjust"}
          initial={{opacity:0, width:0}} 
          animate={{opacity:1, width:"50%"}}
          exit={{opacity:0, width:0}} 
          transition={{duration:2, type:"spring"}}
          
          
          >
          
          <ul >
            <li >
              <Link  href={"/"} >
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} >
                About
              </Link>
            </li>
            <li>
              <Link href={"/projects"} >
                Projects
              </Link>
            </li>
            <li>
              <Link href={"/services"} >
                Services
              </Link>
            </li>
            <li>
              <Link href={"/contact"} >
                Contact
              </Link>
            </li>
          </ul>
        
        
      </motion.div>
        )
       
      :
      (<div className={`${style.links}` }style={{ fontFamily: merriweather.style.fontFamily }}>
          
        <ul >
          <li>
            <Link href={"/"} >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} >
              About
            </Link>
          </li>
          <li>
              <Link href={"/projects"} >
                Projects
              </Link>
            </li>
          <li>
            <Link href={"/services"} >
              Services
            </Link>
          </li>
          <li>
            <Link href={"/contact"} >
              Contact
            </Link>
          </li>
        </ul>
      
      
    </div>)}

    </AnimatePresence>
    <RiMenu3Fill color="#6C584C" size={20} className={style.menu} onClick={showFunc}/>
        
      </nav>
    </div>
  );
}

export default Navbar;
