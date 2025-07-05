"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink, Heart } from "lucide-react"

const openSourceProjects = [
  {
    name: "react-realtime-hooks",
    description: "A collection of React hooks for building real-time applications with WebSockets.",
    stars: 234,
    forks: 45,
    language: "TypeScript",
    languageColor: "#3178c6",
    url: "https://github.com/devkrish/react-realtime-hooks",
  },
  {
    name: "api-rate-limiter",
    description: "Flexible rate limiting middleware for Express.js with Redis support.",
    stars: 156,
    forks: 28,
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/devkrish/api-rate-limiter",
  },
  {
    name: "dashboard-components",
    description: "Beautiful, customizable dashboard components built with React and Tailwind CSS.",
    stars: 89,
    forks: 12,
    language: "TypeScript",
    languageColor: "#3178c6",
    url: "https://github.com/devkrish/dashboard-components",
  },
  {
    name: "dev-setup-scripts",
    description: "Automated setup scripts for development environments across different platforms.",
    stars: 67,
    forks: 15,
    language: "Shell",
    languageColor: "#89e051",
    url: "https://github.com/devkrish/dev-setup-scripts",
  },
]

const contributions = [
  {
    repo: "facebook/react",
    type: "Bug Fix",
    description: "Fixed memory leak in useEffect cleanup",
    merged: true,
  },
  {
    repo: "vercel/next.js",
    type: "Feature",
    description: "Added support for custom error boundaries",
    merged: true,
  },
  {
    repo: "tailwindlabs/tailwindcss",
    type: "Documentation",
    description: "Improved examples for responsive design",
    merged: true,
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Open Source Contributions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Giving back to the community that helped me grow as a developer.
          </p>
        </motion.div>

        {/* My Projects */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Open Source Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.name}</h4>
                  </div>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
                      {project.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recent Contributions
          </motion.h3>

          <div className="space-y-4">
            {contributions.map((contribution, index) => (
              <motion.div
                key={`${contribution.repo}-${index}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{contribution.repo}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{contribution.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {contribution.type}
                    </span>
                    {contribution.merged && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                        Merged
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-red-300" />
          <h3 className="text-2xl font-bold mb-4">Why I Contribute</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Open source taught me everything I know. From my first "Hello World" to building complex systems, the
            community has been there every step of the way. Contributing back isn't just about code—it's about paying
            forward the knowledge, support, and opportunities that shaped my journey as a developer.
          </p>

          <motion.a
            href="https://github.com/devkrish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Follow My Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
