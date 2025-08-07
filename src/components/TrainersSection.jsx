import React from "react";
import { motion } from "framer-motion";
import styles from "./TrainersSection.module.css";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      type: "spring",
    },
  }),
};

const TrainersSection = () => {
  const points = [
    {
      title: "💪 Meet Our Expert Trainers",
      desc: "Our trainers are certified professionals dedicated to helping you achieve your fitness goals.",
    },
    {
      title: "🏋️‍♂️ Personalized Training",
      desc: "We offer one-on-one sessions and group workouts tailored to your body type and objectives.",
    },
    {
      title: "🔥 Motivation & Results",
      desc: "We ensure you stay inspired, on track, and push your limits to transform your fitness journey.",
    },
  ];

  return (
    <section className={styles.container} id="trainers">
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="/trainer-ai.mp4" // 🟡 Replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Spacer between video and content */}
      <div className={styles.spacer}></div>

      {/* Animated Content */}
      <div className={styles.content}>
        {points.map((point, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className={styles.point}
          >
            <h3>{point.title}</h3>
            <p>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
