// src/components/PageSectionHeader.tsx

"use client"

import { motion } from "framer-motion"
import { pageHeaders } from "../../constants/pageHeader"
import type { PageHeaderKey } from "../../constants/pageHeader"


interface PageSectionHeaderProps {
  page: PageHeaderKey
  delay?: number
  className?: string
}

export default function PageSectionHeader({
  page,
  delay = 0.1,
  className = "",
}: PageSectionHeaderProps) {
  const { title, description } = pageHeaders[page]

  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  )
}