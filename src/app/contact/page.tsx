import React from "react";
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

function Contact() {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.formDiv}>
          <div className={style.contactTitle}>
            <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>
              Connect With Me
            </h1>
            <p style={{ fontFamily: merriweather.style.fontFamily }}>Let&apos;s turn your vision into reality—shoot me a message!</p>
          </div>

          <div>
            <form className={style.contactForm}>
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
      <div className={style.icn}>
        <a
          href="https://www.facebook.com/samreen.saif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={style.size} />
        </a>

        <a
          href="https://www.instagram.com/samreen_saif4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className={style.size} />
        </a>

        <a
          href="https://www.github.com/samreensaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={style.size} />
        </a>

        <a
          href="https://www.vercel.com/samreensaif-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel className={style.size} />
        </a>

        <a
          href="https://www.linkedin.com/in/samreen-saif-16141027a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={style.size} />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={style.size} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
