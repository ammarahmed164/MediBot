'use client'

import { motion } from 'framer-motion'
import { Plus, MessageSquare, Trash2, X } from 'lucide-react'

export default function Sidebar({ isOpen, onClose, chats, activeChat, onSelectChat, onNewChat, onClearHistory }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed md:relative left-0 top-0 h-full w-72 bg-gray-50 border-r border-gray-200 z-50 md:z-auto md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">Chat History</h2>
              <button
                onClick={onClose}
                className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={onNewChat}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Chat</span>
            </button>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {chats.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No chat history</p>
              </div>
            ) : (
              chats.map((chat, index) => (
                <motion.button
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onSelectChat(chat.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                    activeChat === chat.id
                      ? 'bg-medical-100 text-medical-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-sm">{chat.title}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 ml-7">
                    {chat.timestamp}
                  </div>
                </motion.button>
              ))
            )}
          </div>

          {/* Clear History Button */}
          {chats.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={onClearHistory}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm font-medium">Clear History</span>
              </button>
            </div>
          )}
        </div>
      </motion.aside>
    </>
  )
}
