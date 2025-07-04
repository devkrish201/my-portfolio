"use client"

import { Calendar } from "../components/ui/calendar"
import { motion } from "framer-motion"
import {  Users, Clock } from "lucide-react"
import { services, availability } from "../constants/services"
export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">What I Offer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive development services to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability Card */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-lg font-semibold">{availability.status}</span>
          </div>

          <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <div>
                <div className="text-sm opacity-80">Next Available</div>
                <div className="font-semibold">{availability.nextAvailable}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <div>
                <div className="text-sm opacity-80">Response Time</div>
                <div className="font-semibold">{availability.responseTime}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <div>
                <div className="text-sm opacity-80">Timezone</div>
                <div className="font-semibold">{availability.timezone}</div>
              </div>
            </div>
          </div>

          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
