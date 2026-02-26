'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Activity, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-medical-50 via-white to-health-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-medical-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-health-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-medical-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-400 to-medical-600 rounded-3xl blur-lg opacity-50" />
              <div className="relative bg-gradient-to-r from-medical-500 to-medical-600 p-6 rounded-3xl shadow-2xl">
                <Activity className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gray-900">Your AI-Powered</span>
            <br />
            <span className="text-gradient">Smart Health Assistant</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Get instant, personalized health guidance powered by advanced AI.
            Available 24/7 to analyze symptoms, provide insights, and support your well-being journey.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Shield className="w-5 h-5 text-health-500" />
              <span className="text-gray-700 font-medium">Trusted & Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Zap className="w-5 h-5 text-medical-500" />
              <span className="text-gray-700 font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Activity className="w-5 h-5 text-health-600" />
              <span className="text-gray-700 font-medium">24/7 Available</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/chatbot" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Start Health Check</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </motion.div>

          {/* SDG Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-2xl shadow-lg"
          >
            <div className="bg-gradient-to-r from-health-500 to-health-600 text-white font-bold px-4 py-2 rounded-xl text-sm">
              SDG 3
            </div>
            <span className="text-gray-700 font-medium">Supporting Good Health & Well-being</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
