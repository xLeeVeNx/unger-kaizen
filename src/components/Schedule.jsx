import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Phone,
  MessageCircle
} from 'lucide-react'

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('schedule')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scheduleInfo = [
    { icon: Calendar, label: 'Дни занятий', value: 'Вторник, Четверг, Суббота' },
    { icon: Clock, label: 'Длительность', value: '1.5 часа' },
    { icon: Users, label: 'Размер группы', value: 'До 10 человек' },
    { icon: MapPin, label: 'Место', value: 'Самал 10А (зал карате)' },
    { icon: DollarSign, label: 'Первое занятие', value: 'БЕСПЛАТНО!' }
  ]

  const rules = [
    {
      icon: CheckCircle,
      type: 'success',
      title: 'Оплата занятий',
      items: [
        'Оплата строго в начале каждого месяца — авансом',
        'При наличии медицинской справки — возможен частичный перенос',
        'Это требование Федерации карате'
      ]
    },
    {
      icon: AlertCircle,
      type: 'warning',
      title: 'Пропуски и дисциплина',
      items: [
        'Пропуски тренировок не допускаются',
        'Отпустить можно только по справке от врача',
        'Опоздание более чем на 10 минут = занятие отменяется'
      ]
    },
    {
      icon: XCircle,
      type: 'error',
      title: 'Поведение на тренировках',
      items: [
        'Обязательно: кимоно, пояс, сменная обувь',
        'Соблюдение дисциплины и уважения',
        'Родители во время тренировки в зал не заходят'
      ]
    }
  ]

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-white">
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
              Расписание и правила
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Чёткая организация тренировочного процесса для максимального результата
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-gray-100 rounded-xl p-1 flex">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'schedule'
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Расписание
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'rules'
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Правила
              </button>
            </div>
          </motion.div>

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {scheduleInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                        <p className="text-lg font-bold text-dark-800">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Age Groups */}
              <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  🎯 Возрастные группы: 4-15 лет
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3">👶 Младшая группа (4-8 лет)</h4>
                    <ul className="space-y-2 text-gray-100">
                      <li>• Основы координации и дисциплины</li>
                      <li>• Игровые элементы в тренировке</li>
                      <li>• Развитие моторики</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3">🧒 Старшая группа (9-15 лет)</h4>
                    <ul className="space-y-2 text-gray-100">
                      <li>• Серьёзная техническая подготовка</li>
                      <li>• Участие в соревнованиях</li>
                      <li>• Формирование характера</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-dark-800 mb-4">
                    Готовы начать?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Запишитесь на первое БЕСПЛАТНОЕ занятие прямо сейчас!
                  </p>
                  <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:+77787043005"
                      className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 btn-glow text-center shadow-lg"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span className="whitespace-nowrap text-lg">Позвонить</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://wa.me/77787043005"
                      className="inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 text-center shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="whitespace-nowrap text-lg">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">
                      Важно для родителей!
                    </h3>
                    <p className="text-yellow-700">
                      Строгие, но чёткие правила — это не про жёсткость, а про уважение к труду, 
                      дисциплине и формирование характера у ваших детей.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {rules.map((rule, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                      rule.type === 'success' 
                        ? 'bg-green-50 border-green-200'
                        : rule.type === 'warning'
                        ? 'bg-yellow-50 border-yellow-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <rule.icon className={`w-6 h-6 ${
                        rule.type === 'success' 
                          ? 'text-green-600'
                          : rule.type === 'warning'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`} />
                      <h3 className={`text-lg font-bold ${
                        rule.type === 'success' 
                          ? 'text-green-800'
                          : rule.type === 'warning'
                          ? 'text-yellow-800'
                          : 'text-red-800'
                      }`}>
                        {rule.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {rule.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className={`text-sm leading-relaxed ${
                            rule.type === 'success' 
                              ? 'text-green-700'
                              : rule.type === 'warning'
                              ? 'text-yellow-700'
                              : 'text-red-700'
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-dark-800 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Связь с тренером
                </h3>
                <p className="text-gray-300 mb-6">
                  Вопросы по оплате и организационные моменты — только в личные сообщения. 
                  Я всегда на связи!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+77787043005"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-dark-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Позвонить</span>
                  </a>
                  <a
                    href="https://wa.me/77787043005"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Написать в WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule