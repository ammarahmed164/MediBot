'use client'

import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, delay = 0, color = 'medical' }) {
  const colorClasses = {
    medical: 'from-medical-500 to-medical-600',
    health: 'from-health-500 to-health-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-emerald-500 to-emerald-600',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card group cursor-pointer"
    >
      <div className="space-y-4">
        {/* Icon Container */}
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${colorClasses[color]} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-medical-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="pt-2">
          <span className="inline-flex items-center text-medical-600 font-semibold group-hover:text-medical-700 transition-colors">
            Learn more
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
