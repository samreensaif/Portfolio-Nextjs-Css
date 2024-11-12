 "use client";
import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { dancingScript, merriweather } from "@/font"
import AOS from 'aos';
import 'aos/dist/aos.css';





import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <nav  className={style.nav} >
        
          
          <h1 data-aos="fade-right" style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif.</h1>
       

        
        {isOpen == true ?(
          <div className={`${style.links} ${style.adjust}`} style={{ fontFamily: merriweather.style.fontFamily }} >
          
          <ul data-aos="fade-left">
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
        
        
      </div>
        )
      :
      (<div className={`${style.links}` }style={{ fontFamily: merriweather.style.fontFamily }}>
          
        <ul data-aos="fade-left">
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
    <RiMenu3Fill color="#6C584C" size={20} className={style.menu} onClick={showFunc}/>
        
      </nav>
    </div>
  );
}

export default Navbar;
