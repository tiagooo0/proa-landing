"use client"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import { eventos } from "../../lib/data"

/**
 * Página de calendario de eventos
 * Lista todos los eventos académicos y actividades
 */
export default function CalendarioPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Calendario de Eventos" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {eventos.map((evento) => (
                <div key={evento.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Fecha */}
                    <div className="flex-shrink-0">
                      <div className="bg-brand text-white rounded-lg p-4 text-center min-w-[100px]">
                        <div className="text-2xl font-bold">{new Date(evento.date).getDate()}</div>
                        <div className="text-sm uppercase">
                          {new Date(evento.date).toLocaleDateString("es-AR", { month: "short" })}
                        </div>
                      </div>
                    </div>

                    {/* Información del evento */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{evento.title}</h3>
                      <p className="text-gray-600 mb-2">{evento.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {evento.time}
                      </div>
                    </div>

                    {/* Botón de exportar (placeholder) */}
                    <div className="flex-shrink-0">
                      <button
                        className="btn btn-outline text-sm"
                        onClick={() => alert("Función de exportar .ics próximamente disponible")}
                      >
                        Exportar .ics
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Información adicional */}
            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📅 Información sobre el Calendario</h3>
              <p className="text-gray-600 text-sm">
                Este calendario incluye los eventos más importantes del año académico. Para recibir notificaciones sobre
                nuevos eventos, podés exportar los eventos individuales a tu calendario personal.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
