import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const [showCharacter, setShowCharacter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCharacter(false);
    }, 4000); // character stays for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="why-choose-us" className={styles.container}>
      <div className="max-w-6xl mx-auto py-16 px-4 text-center">
        <AnimatePresence>
          {showCharacter ? (
            <motion.img
              key="character"
              src="./cartoon-man.gif"
              alt="Animated Trainer"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotate: [0, 10, -10, 10, 0] }}
              exit={{ x: "100vw", opacity: 0 }}
              transition={{ type: "tween", duration: 2 }}
              className={styles.character}
            />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.title}>Why Choose BoostUp Gym?</h2>
              <p className={styles.subtitle}>
                We’re not just a gym, we’re your transformation partner.
              </p>
              <div className={styles.reasons}>
                <div className={styles.card}>
                  <h3>🏋️ Certified Trainers</h3>
                  <p>Our trainers are experts dedicated to your fitness goals.</p>
                </div>
                <div className={styles.card}>
                  <h3>🔥 Modern Equipment</h3>
                  <p>Train with high-end machines and dynamic workout tools.</p>
                </div>
                <div className={styles.card}>
                  <h3>💯 Personalized Plans</h3>
                  <p>Customized workout and diet plans for every body type.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUs;
