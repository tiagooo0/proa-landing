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
    { href: "/proa", label: "Sobre PROA" },
    { href: "/academico", label: "Académico" },
    { href: "/noticias", label: "Noticias" },
    { href: "/calendario", label: "Calendario" },
    { href: "/documentos", label: "Documentos" },
    { href: "/admisiones", label: "Admisiones" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-proa.png" alt="Logo PROA Córdoba" width={40} height={40} className="h-10 w-auto" />
            <span className="font-bold text-lg text-gray-900">PROA Córdoba</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-brand transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4`}>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand hover:bg-gray-100 rounded-md transition-colors duration-200"
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
