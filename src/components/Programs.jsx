// src/components/Programs.jsx

import React from "react";
import styles from "./Programs.module.css";
import { motion } from "framer-motion";

const programs = [
  {
    name: "Strength Training",
    image: "/strength.jpg",
    description: "Build raw strength and power with expert-led weight training.",
  },
  {
    name: "Cardio Blast",
    image: "/cardio.jpg",
    description: "Improve heart health and burn fat with intense cardio routines.",
  },
  {
    name: "CrossFit",
    image: "/cross.jpeg",
    description: "Combine strength and endurance through hardcore CrossFit sessions.",
  },
  {
    name: "HIIT",
    image: "/HIIT.jpg",
    description: "High-intensity interval training for fast, explosive results.",
  },
  {
    name: "Yoga & Flex",
    image: "/YOGA.jpg",
    description: "Improve flexibility and focus with calming yoga sessions.",
  },
  {
    name: "Bodybuilding",
    image: "/BODY.jpg",
    description: "Bulk up and sculpt your body with focused muscle training.",
  },
];

const Programs = () => {
  return (
    <section className={`${styles.programsSection} py-16 px-6`} id="programs">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <svg
            className={styles.dumbbell}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="red"
            viewBox="0 0 24 24"
          >
            <path d="M21 13h-1v-2h1v-2h-1V7h-2v1h-2V7h-2v1h-2V7h-2v1H9V7H7v1H5V7H3v2h1v2H3v2h1v2H3v2h2v-1h2v1h2v-1h2v1h2v-1h2v1h2v-1h2v1h2v-2h-1v-2h1v-2zm-4 0h-2v-2h2v2z" />
          </svg>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">BoostUp Gym Programs</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              className={styles.programCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <img
                src={program.image}
                alt={program.name}
                className={styles.programImage}
              />
              <div className={styles.programContent}>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
