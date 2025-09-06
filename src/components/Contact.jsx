import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  User, 
  Send,
  Star,
  Gift
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    message: ''
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Заявка на тренировки по карате:
Имя ребенка: ${formData.name}
Телефон: ${formData.phone}
Возраст: ${formData.age}
Сообщение: ${formData.message || 'Не указано'}`
    
    const whatsappUrl = `https://wa.me/77787043005?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (778) 704-30-05',
      link: 'tel:+77787043005',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Написать сообщение',
      link: 'https://wa.me/77787043005',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Самал 10А (зал карате)',
      link: '#',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Расписание',
      value: 'Вт, Чт, Сб',
      link: '#schedule',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-dark-900 to-primary-900 text-white">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Запись на тренировки
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Свяжитесь со мной любым удобным способом. Всегда рад ответить на ваши вопросы!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Special Offer */}
              <div className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">Первое занятие БЕСПЛАТНО!</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Приведите ребенка на пробную тренировку и убедитесь сами в качестве обучения
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
                  Оставить заявку
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Имя ребенка *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Введите имя ребенка"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон родителя *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+7 (777) 777-77-77"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Возраст ребенка *
                    </label>
                    <div className="relative">
                      <select
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-800">Выберите возраст</option>
                        {Array.from({length: 12}, (_, i) => i + 4).map(age => (
                          <option key={age} value={age} className="text-gray-800">{age} лет</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Дополнительная информация
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Есть ли у ребенка опыт в спорте, особенности здоровья или другие вопросы..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-orange-500 text-white font-bold py-4 px-4 sm:px-6 rounded-xl hover:from-primary-600 hover:to-orange-600 transition-all duration-300 btn-glow flex items-center justify-center space-x-2 sm:space-x-3 shadow-xl"
                  >
                    <Send className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-center leading-tight">Отправить заявку через WhatsApp</span>
                  </motion.button>
                </form>

                <p className="text-sm text-gray-300 mt-4 text-center">
                  * После отправки заявки вы будете перенаправлены в WhatsApp
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Быстрая связь
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-200">{item.title}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Почему выбирают нас?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Star, text: '15+ лет опыта в карате' },
                    { icon: User, text: 'Индивидуальный подход к каждому' },
                    { icon: Gift, text: 'Первое занятие бесплатно' },
                    { icon: Star, text: 'Малые группы до 10 человек' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Как добраться
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <p className="font-semibold">Самал 10А</p>
                      <p className="text-gray-300 text-sm">Специализированный зал карате</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <p className="font-semibold">Расписание</p>
                      <p className="text-gray-300 text-sm">Вторник, Четверг, Суббота</p>
                      <p className="text-gray-300 text-sm">Время уточняется при записи</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact