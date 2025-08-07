import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Raj Verma",
    role: "Software Engineer",
    review:
      "BoostUp Gym transformed my life. The trainers are amazing and the equipment is top-notch.",
  },
  {
    name: "Anjali Mehta",
    role: "Nutritionist",
    review:
      "This gym not only improved my physique but also my confidence. Highly recommended!",
  },
  {
    name: "Vikram Singh",
    role: "Student",
    review:
      "Perfect for students. Great pricing and personalized plans helped me stay consistent.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>What Our Members Say</h2>

        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.card}
            >
              <p className={styles.review}>"{testimonials[index].review}"</p>
              <h3 className={styles.name}>{testimonials[index].name}</h3>
              <p className={styles.role}>{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
        <p className={styles.instruction}>← → Use arrow keys or swipe to navigate</p>
      </div>
    </section>
  );
};

export default Testimonials;
