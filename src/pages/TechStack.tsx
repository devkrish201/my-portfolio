"use client"

import { motion } from "framer-motion"
import { techStackIem } from "../constants/techStack"

export default function TechStack() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {techStackIem.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className="text-2xl">{tech.icon}</span>
          <span className={`font-medium ${tech.color}`}>{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
