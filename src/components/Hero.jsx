import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h2>BoostUP</h2>
        </div>
        <div className={styles.content}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg animate-pulse">
            Train The Fighter In You
          </h1>
          <p className="text-white text-center mt-4 text-lg max-w-xl mx-auto drop-shadow">
            Push your limits, break boundaries, and become the strongest version of yourself with BoostUP Gym.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
            Try a Free Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
