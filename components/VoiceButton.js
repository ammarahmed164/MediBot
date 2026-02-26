'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff } from 'lucide-react'

export default function VoiceButton({ isListening, onToggle }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className={`relative p-3 rounded-xl transition-all duration-300 ${
        isListening
          ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
          : 'bg-gray-100 text-gray-600 hover:bg-medical-100 hover:text-medical-600'
      }`}
      aria-label={isListening ? 'Stop listening' : 'Start voice input'}
    >
      {/* Pulse Animation when listening */}
      {isListening && (
        <>
          <motion.div
            animate={{ scale: [1, 1.5, 2], opacity: [1, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-red-500 rounded-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1.6], opacity: [1, 0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 bg-red-500 rounded-xl"
          />
        </>
      )}

      {/* Icon */}
      <div className="relative z-10">
        {isListening ? (
          <MicOff className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </div>

      {/* Listening Indicator */}
      {isListening && (
        <div className="absolute -top-1 -right-1 z-20">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
        </div>
      )}
    </motion.button>
  )
}
