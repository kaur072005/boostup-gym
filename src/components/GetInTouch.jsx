// src/components/GetInTouch.jsx
import React from "react";
import styles from "./GetInTouch.module.css";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className={styles.getInTouchSection} id="contact">
      <div className={styles.container}>
        {/* Cartoon Image with Motion */}
        <motion.img
          src="/cartoon-bodybuilder.png"
          alt="Animated Bodybuilder"
          className={styles.cartoon}
          animate={{
            x: ["-5%", "5%", "-5%"],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Contact Form Content */}
        <div className={styles.content}>
          <h2>Get In Touch</h2>
          <p>Our animated trainer is here to help! Drop your details below.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
