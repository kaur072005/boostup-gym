// src/components/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      {/* Animated gradient background */}
      <div className={styles.bgEffect}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>

        <div className={styles.details}>
          <div className={styles.item}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Krishna Nagar,Kurukshetra,Harayana 136118</span>
          </div>
          <div className={styles.item}>
            <FaPhoneAlt className={styles.icon} />
            <span>+91 98765 43210</span>
          </div>
          <div className={styles.item}>
            <FaEnvelope className={styles.icon} />
            <span>boostupgym@gmail.com</span>
          </div>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <p className={styles.copyright}>
          © 2025 BoostUp Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
