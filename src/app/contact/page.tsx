"use client"

import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { dancingScript, merriweather } from "@/font";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.formDiv}>
          <div className={style.contactTitle}>
            <h1 data-aos="zoom-in" data-aos-delay="200" style={{ fontFamily: dancingScript.style.fontFamily }}>
              Connect With Me
            </h1>
            <p data-aos="fade-right" data-aos-delay="400" style={{ fontFamily: merriweather.style.fontFamily }}>Let&apos;s turn your vision into reality—shoot me a message!</p>
          </div>

          <div>
            <form data-aos="fade-up" data-aos-delay="1000" className={style.contactForm}>
              <label htmlFor="fname">First Name: </label>
              <input
                className={style.inputField}
                type="text"
                id="fname"
                name="fname"
                autoComplete="off"
                placeholder="Enter your first name"
                required
              />

              <label htmlFor="lname">Last Name:</label>
              <input
                className={style.inputField}
                type="text"
                id="lname"
                name="lname"
                autoComplete="off"
                placeholder="Enter your last name"
                required
              />

              <label>Gender:</label>
              <div className={style.genderOptions}>
                <input
                  className={style.inputRadio}
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label htmlFor="male">Male</label>

                <input
                  className={style.inputRadio}
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label htmlFor="female">Female</label>

                <input
                  className={style.inputRadio}
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label htmlFor="other">Other</label>
              </div>

              <label htmlFor="email">Email Address:</label>
              <input
                className={style.inputField}
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email address"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                className={style.inputField}
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message here"
              ></textarea>
              <a href="/contact">
              <button type="submit">Submit</button>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div  className={style.icn}>
        <a
          href="https://www.facebook.com/samreen.saif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>

        <a
          href="https://www.instagram.com/samreen_saif4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>

        <a
          href="https://www.github.com/samreensaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>

        <a
          href="https://www.vercel.com/samreensaif-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>

        <a
          href="https://www.linkedin.com/in/samreen-saif-16141027a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter data-aos="zoom-in" data-aos-delay="1500" className={style.size} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
