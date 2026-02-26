'use client'

import { motion } from 'framer-motion'
import { Bot, User } from 'lucide-react'

export default function ChatBubble({ message, isBot, timestamp }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {/* Bot Avatar */}
      {isBot && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-medical-500 to-medical-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        </div>
      )}

      {/* Message Bubble */}
      <div className={`max-w-[75%] md:max-w-[65%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isBot
              ? 'bg-white text-gray-800 shadow-md rounded-bl-none'
              : 'bg-gradient-to-r from-medical-500 to-medical-600 text-white shadow-lg rounded-br-none'
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message}</p>
        </div>

        {/* Timestamp */}
        <div className={`text-xs text-gray-400 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
          {timestamp}
        </div>
      </div>

      {/* User Avatar */}
      {!isBot && (
        <div className="flex-shrink-0 order-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-health-500 to-health-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
    </motion.div>
  )
}
