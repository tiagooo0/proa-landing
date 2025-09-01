"use client"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import { documentos } from "../../lib/data"

/**
 * Página de documentos descargables
 * Lista todos los documentos oficiales disponibles
 */
export default function DocumentosPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Documentos" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentos.map((doc) => (
                <div key={doc.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{doc.size}</span>
                        <a
                          href={`/docs/${doc.filename}`}
                          download
                          className="btn btn-brand text-sm"
                          onClick={(e) => {
                            e.preventDefault()
                            alert("Los archivos PDF estarán disponibles próximamente en /public/docs/")
                          }}
                        >
                          Descargar PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Información adicional */}
            <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📄 Información sobre Documentos</h3>
              <p className="text-gray-600 text-sm mb-2">
                Todos los documentos están en formato PDF y se actualizan periódicamente. Si necesitás una versión
                específica o tenés problemas para descargar algún archivo, contactanos a través del formulario de
                contacto.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Nota:</strong> Los archivos se encuentran en la carpeta /public/docs/ del proyecto para
                facilitar su gestión.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
