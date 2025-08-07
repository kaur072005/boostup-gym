import React from 'react';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {
  return (
    <section className={styles.getInTouchSection}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea rows="4" placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <img
          src="/cartoon-bodybuilder.png"
          alt="Cartoon Bodybuilder"
          className={styles.cartoon}
        />
      </div>
    </section>
  );
};

export default GetInTouch;
