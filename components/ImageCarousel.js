"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

/**
 * Carrusel de imágenes del colegio
 * Cambia automáticamente cada 5 segundos y permite navegación manual
 */
export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/modern-school-building-exterior-with-students.png",
      alt: "Fachada principal de PROA Córdoba",
      title: "Nuestra Institución",
    },
    {
      src: "/computer-lab-with-students-coding.png",
      alt: "Laboratorio de computación",
      title: "Tecnología de Vanguardia",
    },
    {
      src: "/students-working-together-in-classroom.png",
      alt: "Estudiantes trabajando en equipo",
      title: "Aprendizaje Colaborativo",
    },
    {
      src: "/graduation-ceremony-students-celebrating.png",
      alt: "Ceremonia de graduación",
      title: "Formando el Futuro",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Imagen anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Siguiente imagen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
