'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X, Hospital, Phone } from 'lucide-react'

export default function AlertModal({ isOpen, onClose, onFindHospital }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden pulse-red"
            >
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Medical Alert</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Based on your symptoms, we recommend consulting a{' '}
                  <span className="font-bold text-red-600">professional doctor immediately</span>.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">
                      Your symptoms may indicate a condition that requires professional medical attention. 
                      Please don't delay seeking help.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={onFindHospital}
                    className="w-full btn-primary bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 flex items-center justify-center space-x-2 py-4"
                  >
                    <Hospital className="w-5 h-5" />
                    <span className="font-semibold">Find Nearby Hospital</span>
                  </button>

                  <button className="w-full btn-secondary border-2 border-red-500 text-red-600 hover:bg-red-50 flex items-center justify-center space-x-2 py-4">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">Call Emergency Services</span>
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center pt-2">
                  This is an AI recommendation. Always trust your instincts and seek professional help when needed.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
