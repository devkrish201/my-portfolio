// src/components/layout/Footer.tsx
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              DevKrish
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-stack developer passionate about building scalable web applications and real-time systems.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Currently available for freelance work
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {[
                { icon: Github, href: "https://github.com/devkrish", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/devkrish", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/devkrish", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Local time: {currentTime} IST
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2024 Krishna Sahu (DevKrish). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}