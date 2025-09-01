"use client"

/**
 * Botón flotante de contacto
 * Posicionado en la esquina inferior izquierda
 * Muestra el teléfono de contacto de la escuela
 */
export default function FloatingContactButton() {
  const phoneNumber = "+54 351 4348894" // Número de teléfono de la escuela

  const handleCall = () => {
    window.open(`tel:${phoneNumber.replace(/\s|-/g, "")}`, "_self")
  }

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label={`Llamar al ${phoneNumber}`}
      title={`Llamar al ${phoneNumber}`}
    >
      <svg
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {phoneNumber}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  )
}
