 "use client";
import React from "react";
import style from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { dancingScript } from "@/font"





import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={style.nav}>
        
          
          <h1  style={{ fontFamily: dancingScript.style.fontFamily }}>Samreen Saif.</h1>
       

        
        {isOpen == true ?(
          <div className={`${style.links} ${style.adjust}`}>
          
          <ul>
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
      (<div className={`${style.links}`}>
          
        <ul>
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
