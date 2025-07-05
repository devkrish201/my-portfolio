"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Code2, Bug, Rocket, ChevronLeft, ChevronRight } from "lucide-react"

const dailyWork = [
  {
    time: "9:00 AM",
    title: "Morning Planning",
    description: "Review tasks, check GitHub issues, and plan the day ahead with a fresh cup of coffee.",
    icon: Coffee,
    color: "from-orange-500 to-yellow-500",
  },
  {
    time: "10:00 AM",
    title: "Deep Work Session",
    description: "Focus time for complex features, architecture decisions, and writing clean, maintainable code.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    time: "2:00 PM",
    title: "Bug Hunting & Testing",
    description: "Debug issues, write tests, and ensure everything works perfectly across different environments.",
    icon: Bug,
    color: "from-red-500 to-pink-500",
  },
  {
    time: "6:00 PM",
    title: "Deployment & Experiments",
    description: "Ship updates, try new technologies, and work on side projects that spark creativity.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-500",
  },
]

const blogPosts = [
  {
    title: "Building Real-time Systems with WebSockets",
    excerpt:
      "A deep dive into creating scalable real-time applications with proper error handling and reconnection logic.",
    date: "2023-12-15",
    readTime: "8 min read",
    tags: ["WebSocket", "Node.js", "Real-time"],
  },
  {
    title: "Database Optimization Techniques",
    excerpt: "Performance tips and indexing strategies that reduced our query times by 70%.",
    date: "2023-12-10",
    readTime: "6 min read",
    tags: ["PostgreSQL", "Performance", "Database"],
  },
  {
    title: "React State Management in 2024",
    excerpt: "Comparing different state management solutions and when to use each one.",
    date: "2023-12-05",
    readTime: "10 min read",
    tags: ["React", "State Management", "Frontend"],
  },
]

export default function Journey() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dailyWork.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dailyWork.length) % dailyWork.length)
  }

  return (
    <section id="journey" className="pb-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">A Day as DevKrish</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From morning coffee to late-night experiments, here's what drives my daily workflow.
          </p>
        </motion.div>

        {/* Daily Work Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${dailyWork[currentSlide].color} rounded-2xl flex items-center justify-center`}
                  >
                    {React.createElement(dailyWork[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {dailyWork[currentSlide].time}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dailyWork[currentSlide].title}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {dailyWork[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-2">
                {dailyWork.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Recent Thoughts & Learnings
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
