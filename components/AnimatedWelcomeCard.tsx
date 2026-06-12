"use client";

import { motion } from "framer-motion";
import WelcomeCard from "./WelcomeCard";

// Match the properties expected from page.tsx
type AnimatedWelcomeCardProps = {
  totalCourses: number;
  completedCourses: number;
  inProgressCourses: number;
};

export default function AnimatedWelcomeCard({
  totalCourses,
  completedCourses,
  inProgressCourses,
}: AnimatedWelcomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Passing the database values right into our newly rewritten card */}
      <WelcomeCard 
        totalCourses={totalCourses}
        completedCourses={completedCourses}
        inProgressCourses={inProgressCourses}
      />
    </motion.div>
  );
}

