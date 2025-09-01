import Link from "next/link"

/**
 * Footer del sitio
 * Contiene información de contacto y enlaces importantes
 * Para editar la información, modifica directamente el contenido
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@proacordoba.edu.ar</p>
              <p>📞 (0351) 123-4567</p>
              <p>📍 Córdoba, Argentina</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link href="/admisiones" className="block text-gray-300 hover:text-white transition-colors">
                Admisiones
              </Link>
              <Link href="/calendario" className="block text-gray-300 hover:text-white transition-colors">
                Calendario Académico
              </Link>
              <Link href="/documentos" className="block text-gray-300 hover:text-white transition-colors">
                Documentos
              </Link>
              <Link href="/politicas/privacidad" className="block text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>

          {/* Información institucional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institución</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Programa Escuelas PROA – Ministerio de Educación de Córdoba
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Escuela Experimental PROA Córdoba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
