import React from "react";
import { motion } from "framer-motion";
import styles from "./PricingSection.module.css";
import money from "../assets/money.png";
import gymProp from "../assets/gym-prop.png";
import background from "../assets/pricing-bg.jpg"; // Use a dark gym-themed bg

const pricingCards = [
  {
    title: "Basic",
    price: "$29/mo",
    features: ["1 Day Access", "Free Locker", "Trainer Not Included"],
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: ["4 Day Access", "Locker + Shower", "Group Classes"],
  },
  {
    title: "Premium",
    price: "$79/mo",
    features: ["Unlimited Access", "Personal Trainer", "Nutrition Plan"],
  },
];

export default function PricingSection() {
  return (
    <div
      className={styles.pricingWrapper}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 3D Dollar Symbol Animation */}
      <motion.img
        src={money}
        alt="money"
        className={styles.money}
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1.2, rotate: 0 }}
        transition={{ type: "spring", stiffness: 90, delay: 0.4 }}
      />

      {/* Gym Prop Floating */}
      <motion.img
        src={gymProp}
        alt="gym prop"
        className={styles.gymProp}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <h2 className={styles.heading}>Choose Your Plan</h2>

      {/* Pricing Cards */}
      <div className={styles.cardWrapper}>
        {pricingCards.map((plan, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.3 }}
          >
            <h3>{plan.title}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className={styles.btn}>Join Now</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
