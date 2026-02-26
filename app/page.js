'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import { Stethoscope, Brain, Heart, Shield, Activity, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Symptom Analysis',
      description: 'Describe your symptoms and get instant AI-powered analysis with potential causes and recommendations.',
      color: 'medical',
    },
    {
      icon: Brain,
      title: 'AI Disease Prediction',
      description: 'Advanced machine learning algorithms analyze patterns to predict potential health conditions.',
      color: 'health',
    },
    {
      icon: Heart,
      title: 'Home Remedies',
      description: 'Get personalized home remedy suggestions and lifestyle recommendations for mild conditions.',
      color: 'green',
    },
    {
      icon: Shield,
      title: 'Doctor Alert System',
      description: 'Critical symptoms trigger immediate alerts recommending professional medical consultation.',
      color: 'blue',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Enter Symptoms',
      description: 'Describe what you\'re feeling in simple, everyday language.',
      icon: Activity,
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI analyzes your symptoms against medical knowledge.',
      icon: Brain,
    },
    {
      number: '03',
      title: 'Get Guidance',
      description: 'Receive personalized health recommendations and insights.',
      icon: Heart,
    },
    {
      number: '04',
      title: 'Doctor Alert',
      description: 'If needed, get alerts to consult a healthcare professional.',
      icon: Shield,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Working Professional',
      image: 'SJ',
      content: 'MediBot helped me understand my symptoms quickly. The AI analysis was spot-on, and I knew when to see a doctor.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      image: 'MC',
      content: 'As a student abroad, having 24/7 health guidance is invaluable. MediBot is like having a health assistant in my pocket.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Roberts',
      role: 'Healthcare Advocate',
      image: 'ER',
      content: 'I recommend MediBot to my patients for initial symptom assessment. It helps them make informed decisions about seeking care.',
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* SDG 3 Section */}
      <section className="py-20 bg-gradient-to-r from-health-500 to-health-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl mb-6">
              <span className="text-4xl font-bold">SDG 3</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Good Health & Well-being
            </h2>
            <p className="text-xl text-health-100 max-w-3xl mx-auto">
              We're committed to supporting the United Nations Sustainable Development Goal 3,
              ensuring healthy lives and promoting well-being for all at all ages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Universal Coverage</h3>
                <p className="text-health-100">Healthcare access for everyone, everywhere</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Preventive Care</h3>
                <p className="text-health-100">Early detection and prevention focused</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Health Security</h3>
                <p className="text-health-100">Protecting communities through awareness</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Powerful Features</span> for Your Health
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology meets healthcare expertise to provide you with the best health guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-gradient">MediBot</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple, intuitive process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-medical-200 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full mb-6 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-0 right-1/2 translate-x-16 -translate-y-2 bg-white border-2 border-medical-500 text-medical-600 font-bold px-3 py-1 rounded-full text-sm">
                    Step {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="/chatbot"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Try MediBot Now</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-medical-50 via-white to-health-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Users Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of users worldwide for their health guidance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-600 to-medical-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-medical-100 mb-8">
              Experience the future of healthcare with AI-powered guidance at your fingertips.
            </p>
            <a
              href="/chatbot"
              className="inline-flex items-center space-x-2 bg-white text-medical-600 font-semibold py-4 px-8 rounded-2xl hover:bg-medical-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Start Your Health Check</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
