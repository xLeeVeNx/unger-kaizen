import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Dumbbell, Heart, Shield, Target, Lightbulb } from 'lucide-react'

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const benefits = [
    {
      category: 'Физическое развитие',
      icon: Dumbbell,
      color: 'from-blue-500 to-blue-600',
      items: [
        'Сила и выносливость',
        'Гибкость и координация',
        'Правильная осанка',
        'Крепкое здоровье'
      ]
    },
    {
      category: 'Характер и дисциплина',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      items: [
        'Самодисциплина',
        'Уважение к другим',
        'Ответственность',
        'Целеустремленность'
      ]
    },
    {
      category: 'Внутренняя сила',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      items: [
        'Уверенность в себе',
        'Эмоциональная стабильность',
        'Стрессоустойчивость',
        'Внутренний покой'
      ]
    },
    {
      category: 'Практические навыки',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      items: [
        'Основы самообороны',
        'Быстрая реакция',
        'Концентрация внимания',
        'Командная работа'
      ]
    }
  ]

  const principles = [
    {
      title: 'Дисциплина',
      description: 'Основа всех достижений. Учимся быть собранными и организованными.',
      icon: Target
    },
    {
      title: 'Уважение',
      description: 'К тренеру, товарищам, традициям. Уважение начинается с себя.',
      icon: Heart
    },
    {
      title: 'Самосовершенствование',
      description: 'Каждый день становимся лучше. Главный соперник — это ты вчерашний.',
      icon: Lightbulb
    }
  ]

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              Философия Шинкиокушинкай
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Карате — это не только техника, сила и выносливость. Это характер, школа жизни.
            </p>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🥋</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-4">
                Что даёт карате вашему ребёнку?
              </h3>
            </div>
            
            <div className="prose prose-lg mx-auto text-center text-gray-700 max-w-4xl">
              <p className="text-lg leading-relaxed">
                <strong>Шинкиокушинкай</strong> — это стиль карате, который формирует не просто бойца, 
                а <strong>цельную личность</strong>. Мы развиваем физические качества через духовное 
                совершенствование, учим преодолевать себя и брать ответственность за свои поступки.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mr-4`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-800">
                    {benefit.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Principles */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-dark-800 mb-12">
              Основные принципы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-800 mb-4">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-center text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Для кого подходят мои тренировки?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">🏆 Для спортивного роста</h4>
                  <p className="text-gray-100">
                    Для тех, кто хочет серьёзно развиваться в спорте и участвовать в соревнованиях
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">💪 Для личного развития</h4>
                  <p className="text-gray-100">
                    Для тех, кто стремится укрепить здоровье, дисциплину, уверенность и внутренную силу
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy