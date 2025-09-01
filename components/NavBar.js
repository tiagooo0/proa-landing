"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

/**
 * Barra de navegación principal
 * Sticky en la parte superior, responsive con menú hamburguesa en móvil
 * Para editar los enlaces, modifica el array 'navItems'
 */
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/institucion", label: "Institución" },
    { href: "/proa", label: "Sobre PRoA" },
    { href: "/academico", label: "Sobre Nosotros" },
    { href: "/noticias", label: "Noticias" },
    { href: "/calendario", label: "Calendario" },
    { href: "/admisiones", label: "Admisiones" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <Image
                src="/logo-proa.png"
                alt="Logo PROA Córdoba"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900 transition-colors duration-300">
              PRoA Córdoba
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 transition-transform duration-300 rotate-180`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
