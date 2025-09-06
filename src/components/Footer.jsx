import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, MessageCircle, MapPin } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥋</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Карате Шинкиокушинкай</h3>
                <p className="text-sm text-gray-400">Унгер Кирилл Дмитриевич</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Растим характер, дисциплину и внутренную силу. 
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Навигация</h4>
            <ul className="space-y-2">
              {[
                { name: 'О тренере', id: 'about' },
                { name: 'Философия', id: 'philosophy' },
                { name: 'Расписание', id: 'schedule' },
                { name: 'Контакты', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+77787043005"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (778) 704-30-05</span>
              </a>
              <a 
                href="https://wa.me/77787043005"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Самал 10А (зал карате)</span>
              </div>
            </div>
          </motion.div>

          {/* Training Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Информация</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>🎯 Возраст: 4-15 лет</p>
              <p>⏰ Длительность: 1.5 часа</p>
              <p>👥 Группа: до 10 человек</p>
              <p>📅 Дни: Вт, Чт, Сб</p>
              <p className="text-primary-400 font-medium">🎁 Первое занятие БЕСПЛАТНО!</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Карате Шинкиокушинкай. Унгер Кирилл Дмитриевич
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Все права защищены
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Создано с</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>для развития детей</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">
              Готовы начать путь в карате?
            </h3>
            <p className="text-gray-100 mb-4">
              Запишитесь на бесплатное первое занятие прямо сейчас!
            </p>
            <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+77787043005"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap text-lg">Позвонить</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/77787043005"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-colors text-center shadow-lg"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap text-lg">WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer