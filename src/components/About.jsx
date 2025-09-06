import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Users, Zap, Shield, Trophy } from 'lucide-react'

const About = () => {
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

  const qualities = [
    {
      icon: Heart,
      title: 'Трепетное отношение',
      description: 'Каждому ребёнку нужен свой подход — и я стараюсь его находить'
    },
    {
      icon: Target,
      title: 'Наставник и мотиватор',
      description: 'Не просто тренер, а друг и психолог, который всегда рядом'
    },
    {
      icon: Users,
      title: 'Индивидуальный подход',
      description: 'Помогаю ребёнку раскрыться и поверить в свои силы'
    },
    {
      icon: Zap,
      title: 'Развитие характера',
      description: 'Строгость там, где необходима. Поддержка — всегда'
    },
    {
      icon: Shield,
      title: 'Школа жизни',
      description: 'Каратэ — это не только техника, это дисциплина и уважение'
    },
    {
      icon: Trophy,
      title: 'Путь к успеху',
      description: 'Растим настоящих спортсменов и достойных людей'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              О тренере
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Более 15 лет пути в каратэ. Образ жизни, который стал призванием
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Placeholder for photo */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🥋</div>
                    <p className="text-gray-600 font-medium">Фото будет добавлено</p>
                    <p className="text-gray-500 text-sm">когда Кирилл отправит его</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full opacity-20"></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-xl text-center border border-primary-100">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">лет в каратэ</div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-xl text-center border border-primary-100">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">самоотдача</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Text */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dark-800 mb-4">
                  Унгер Кирилл Дмитриевич
                </h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Этот путь стал для меня не просто спортом — он стал <strong>образом жизни</strong>. 
                    Я прошёл его с самых основ, через труд, самоотдачу и множество испытаний.
                  </p>
                  <p>
                    Бывали времена, когда приходилось тренироваться одному — без зала, без группы — 
                    но я продолжал. Потому что знал: <strong>каратэ — это не про обстоятельства, 
                    это про внутренний стержень</strong>.
                  </p>
                  <p>
                    Сегодня я делюсь этим опытом со своими учениками. Для меня важно не просто 
                    провести тренировку, а помочь ребёнку раскрыться, почувствовать уверенность, 
                    <strong>поверить в себя и свои силы</strong>.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-2">Моя миссия</h4>
                <p className="mb-4">
                  Растить не только сильных спортсменов, но и людей с характером, 
                  дисциплиной и внутренней силой.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Строгость — где необходима. Поддержка — всегда.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Qualities Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-dark-800 mb-12">
              Мой подход к тренировкам
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <quality.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 mb-2">
                        {quality.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About