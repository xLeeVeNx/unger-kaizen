import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Users, Clock, Award, Phone, MessageCircle } from 'lucide-react'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 karate-bg opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-orange-500/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/8 w-16 h-16 bg-primary-500/10 rounded-lg"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Каратэ</span>
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">
                Шинкиокушинкай
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3">
              Тренер: Унгер Кирилл Дмитриевич
            </p>
            <p className="text-base sm:text-lg text-gray-400">
              Более 15 лет в каратэ • Набор детей 4-15 лет
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Star, text: 'Характер' },
                { icon: Users, text: 'Дисциплина' },
                { icon: Clock, text: 'Выносливость' },
                { icon: Award, text: 'Уверенность' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white"
                >
                  <item.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 border border-white/20">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
                🎯 Первое занятие БЕСПЛАТНО!
              </h3>
              <p className="text-gray-300 mb-8 text-lg sm:text-xl text-center max-w-2xl mx-auto">
                Приведите ребенка на пробную тренировку и убедитесь сами
              </p>
              <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+77787043005"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-dark-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 btn-glow text-center shadow-lg"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap text-lg">Позвонить сейчас</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/77787043005"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 btn-glow text-center shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap text-lg">Написать в WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-primary-400 mb-1">4-15</div>
                <div className="text-gray-300 text-sm">лет</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-primary-400 mb-1">1.5</div>
                <div className="text-gray-300 text-sm">часа</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-primary-400 mb-1">10</div>
                <div className="text-gray-300 text-sm">человек в группе</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero