import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-scroll'

const NAV_ITEMS = [
  { name: 'О тренере', id: 'about' },
  { name: 'Философия', id: 'philosophy' },
  { name: 'Расписание', id: 'schedule' },
  { name: 'Контакты', id: 'contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState(null)
  const [offset, setOffset] = useState(-80) // fallback
  const headerRef = useRef<HTMLElement | null>(null)

  // Прозрачность/blur при скролле
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Динамический offset = текущая высота хедера
  useEffect(() => {
    const updateOffset = () => {
      const h = headerRef.current?.getBoundingClientRect().height ?? 80
      setOffset(-Math.ceil(h))
    }
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])

  // Закрываем бургер на десктопе
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Блокируем прокрутку body при открытом мобильном меню
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : original || ''
    return () => { document.body.style.overflow = original }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl shadow-md ring-1 ring-black/5"
    >
      <div className={`container mx-auto px-4 ${isOpen ? 'pb-3' : ''} sm:px-6 lg:px-8 max-w-7xl`}>
        <div className="flex items-center justify-between h-16 lg:h-20 px-2 lg:px-4">
          {/* Лого */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">🥋</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Карате Шинкиокушинкай</h1>
              <p className="text-sm text-gray-700 font-medium">Унгер Кирилл Дмитриевич</p>
            </div>
          </motion.div>

          {/* Десктоп-меню (>=1024px) */}
          <nav className="hidden lg:!flex items-center gap-8" role="navigation" aria-label="Основное меню">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => setActiveId(item.id)}       // обновляем при скролле
                  onClick={() => setActiveId(item.id)}            // мгновенная подсветка при клике
                  className={`group relative block py-2 text-base font-semibold cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isActive ? 'text-primary-600' : (scrolled ? 'text-gray-800' : 'text-gray-900')
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Подчёркивание */}
                  <span
                    className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary-600 origin-left scale-x-0 transition-transform duration-200 group-[.active]:scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA-кнопки на десктопе */}
          <div className="hidden lg:!flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+77787043005"
              className="flex items-center gap-2 px-4 py-2.5 text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/77787043005"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 btn-glow font-semibold shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.a>
          </div>

          {/* Кнопка бургера (<1024px) */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Открыть меню"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильное меню */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-b-xl shadow-xl"
        >
          <div className="py-4 space-y-1 border-t border-gray-200">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                onClick={() => { setActiveId(item.id); closeMenu() }}
                onSetActive={() => setActiveId(item.id)}
                className="block w-full text-left px-6 py-4 text-gray-800 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors mx-2 cursor-pointer font-medium"
                activeClass="active"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 px-6 pt-4 border-t border-gray-200 mt-2">
              <a
                href="tel:+77787043005"
                className="flex items-center justify-center gap-2 px-6 py-4 text-primary-600 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-colors font-semibold"
                onClick={closeMenu}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Позвонить</span>
              </a>
              <a
                href="https://wa.me/77787043005"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-semibold"
                onClick={closeMenu}
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header