import React from 'react';
import style from "./Contact.module.css";
import { dancingScript } from '@/font';

function Contact() {
  return (

    <div className={style.contact}>
    <div className={style.formDiv}>
      <div className={style.contactTitle}>
        <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>Connect Me</h1>
        <p>Let&apos;s turn your vision into reality—shoot me a message!</p>
      </div>

      <div>
        <form className={style.contactForm}>
          <label htmlFor="fname">First Name:</label>
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
              type="radio"
              id="male"
              name="gender"
              value="male"
              required
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>

            <input
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
