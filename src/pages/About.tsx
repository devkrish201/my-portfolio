"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Lightbulb, Users } from "lucide-react"

const timeline = [
  {
    year: "2020",
    title: "Started Self-Learning",
    description: "Began my journey with HTML, CSS, and JavaScript",
    icon: Code,
  },
  {
    year: "2021",
    title: "First Full-Stack Project",
    description: "Built my first CRUD application with Node.js and MongoDB",
    icon: Lightbulb,
  },
  {
    year: "2022",
    title: "Internship Experience",
    description: "Worked as a frontend developer intern, learned React and modern workflows",
    icon: Users,
  },
  {
    year: "2023",
    title: "Product Launch",
    description: "Launched PulseBoard - real-time monitoring system with 1000+ users",
    icon: Calendar,
  },
]

const skills = [
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
  "Creative Thinking",
  "Communication",
  "Adaptability",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From self-learning to shipping real-world apps that impact thousands of users.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              What started as curiosity about how websites work has evolved into a passion for building scalable,
              user-centric applications. I believe in writing clean, maintainable code and creating solutions that
              genuinely solve problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Currently, I'm focused on building{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">PulseBoard</span> - a real-time event
              monitoring system that helps teams detect anomalies before they become critical issues. It's been an
              incredible journey working with WebSockets, real-time data processing, and creating intuitive dashboards.
            </p>

            {/* Soft Skills */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What I Bring to the Table</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
