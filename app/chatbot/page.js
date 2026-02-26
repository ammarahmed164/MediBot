'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Menu, ArrowDown, Activity, Sparkles } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import ChatBubble from '@/components/ChatBubble'
import AlertModal from '@/components/AlertModal'
import VoiceButton from '@/components/VoiceButton'
import { TypingIndicator } from '@/components/Loader'

export default function ChatbotPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [chats, setChats] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Load chat history from localStorage
  useEffect(() => {
    const savedChats = localStorage.getItem('medibot-chats')
    if (savedChats) {
      setChats(JSON.parse(savedChats))
    }
    
    const savedMessages = localStorage.getItem('medibot-current-messages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    } else {
      // Welcome message
      setMessages([
        {
          id: 1,
          text: "Hello! I'm MediBot, your AI-powered health assistant. 🏥\n\nI'm here to help you understand your symptoms and provide health guidance. Please describe what you're feeling, and I'll do my best to assist you.\n\n⚠️ Note: I provide information, not medical advice. Always consult a healthcare professional for medical concerns.",
          isBot: true,
          timestamp: getCurrentTime(),
        },
      ])
    }
  }, [])

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('medibot-current-messages', JSON.stringify(messages))
    }
  }, [messages])

  // Save chats to localStorage
  useEffect(() => {
    localStorage.setItem('medibot-chats', JSON.stringify(chats))
  }, [chats])

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  function getCurrentTime() {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const generateResponse = async (userMessage) => {
    // Simulate AI response (replace with actual API call)
    const responses = [
      "Thank you for sharing that. Based on your symptoms, I'd recommend monitoring your condition closely. Make sure to stay hydrated and get plenty of rest.",
      "I understand you're experiencing discomfort. Let me analyze this for you... The symptoms you've described could be related to several common conditions.",
      "That's important information. Have you noticed any other symptoms accompanying this? It would help me provide more accurate guidance.",
      "Based on what you've told me, I suggest trying some home remedies first. However, if symptoms persist for more than 2-3 days, please consult a healthcare professional.",
    ]

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      text: input.trim(),
      isBot: false,
      timestamp: getCurrentTime(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await generateResponse(input)
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: getCurrentTime(),
      }

      setMessages(prev => [...prev, botMessage])

      // Check for alert condition (simulate backend alert)
      const shouldAlert = Math.random() > 0.8 // 20% chance for demo
      if (shouldAlert) {
        setShowAlert(true)
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble processing your request right now. Please try again.",
        isBot: true,
        timestamp: getCurrentTime(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleNewChat = () => {
    if (messages.length > 1) {
      // Save current chat
      const newChat = {
        id: Date.now(),
        title: messages[1]?.text?.substring(0, 30) + '...' || 'New Chat',
        timestamp: getCurrentTime(),
        messages: [...messages],
      }
      setChats(prev => [newChat, ...prev])
    }

    // Reset to welcome message
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm MediBot, your AI-powered health assistant. 🏥\n\nI'm here to help you understand your symptoms and provide health guidance. Please describe what you're feeling, and I'll do my best to assist you.",
        isBot: true,
        timestamp: getCurrentTime(),
      },
    ])
    setActiveChat(null)
    localStorage.removeItem('medibot-current-messages')
  }

  const handleSelectChat = (chatId) => {
    const selectedChat = chats.find(chat => chat.id === chatId)
    if (selectedChat) {
      setMessages(selectedChat.messages)
      setActiveChat(chatId)
      setSidebarOpen(false)
    }
  }

  const handleClearHistory = () => {
    setChats([])
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm MediBot, your AI-powered health assistant. 🏥\n\nHow can I help you today?",
        isBot: true,
        timestamp: getCurrentTime(),
      },
    ])
    setActiveChat(null)
    localStorage.removeItem('medibot-chats')
    localStorage.removeItem('medibot-current-messages')
  }

  const handleFindHospital = () => {
    // Open Google Maps to find nearby hospitals
    window.open('https://www.google.com/maps/search/hospitals+near+me', '_blank')
  }

  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
      alert('Could not capture speech. Please try again.')
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
    setIsListening(true)
  }

  return (
    <main className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        chats={chats}
        activeChat={activeChat}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onClearHistory={handleClearHistory}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-medical-500 to-medical-600 p-2 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">MediBot</h1>
                <p className="text-xs text-gray-500">AI Health Assistant</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleNewChat}
            className="btn-primary text-sm px-4 py-2 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">New Chat</span>
          </button>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-medical-500 to-medical-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <TypingIndicator />
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Scroll to Bottom Button */}
        <ScrollToBottomButton onClick={scrollToBottom} />

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-2">
              {/* Voice Button */}
              <VoiceButton
                isListening={isListening}
                onToggle={toggleVoiceInput}
              />

              {/* Text Input */}
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your symptoms..."
                  rows={1}
                  className="input-field pr-12 resize-none max-h-32"
                  style={{ minHeight: '48px' }}
                />
              </div>

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  input.trim() && !isLoading
                    ? 'bg-gradient-to-r from-medical-500 to-medical-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center mt-3">
              ⚠️ MediBot provides information, not medical advice. Always consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>

      {/* Doctor Alert Modal */}
      <AlertModal
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        onFindHospital={handleFindHospital}
      />
    </main>
  )
}

// Scroll to Bottom Button Component
function ScrollToBottomButton({ onClick }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      const threshold = 300
      setShow(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClick}
          className="fixed bottom-24 right-8 bg-gradient-to-r from-medical-500 to-medical-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl z-40"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
