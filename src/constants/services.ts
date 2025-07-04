// constants/services.ts
import { Code, Database, BarChart3, Zap } from "lucide-react"

export const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
  },
  {
    icon: Database,
    title: "API Integration & Backend Services",
    description: "Robust backend systems with RESTful APIs, database design, and third-party service integrations.",
    features: ["RESTful APIs", "Database Design", "Authentication", "Rate Limiting"],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Data Visualization",
    description:
      "Interactive dashboards and data visualization solutions that turn complex data into actionable insights.",
    features: ["Real-time Charts", "Custom Analytics", "Export Features", "Mobile Responsive"],
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    description: "WebSocket-based real-time applications for live chat, notifications, and collaborative features.",
    features: ["WebSocket Integration", "Live Updates", "Scalable Architecture", "Low Latency"],
  },
]

export const availability = {
  status: "Available for Freelance",
  nextAvailable: "January 2024",
  responseTime: "< 24 hours",
  timezone: "IST (UTC+5:30)",
}