"use client"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página de contacto
 * Info agrupada de a 2 y mapa al final
 */
export default function ContactoPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Contacto" className="bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">Información de Contacto</h3>

            {/* Grupo 1: Email + Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mb-2">
                  📧
                </div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">cordobacentro.ds@escuelasproa.edu.ar</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mb-2">
                  📞
                </div>
                <h4 className="font-semibold text-gray-900">Teléfono</h4>
                <p className="text-gray-600">+54 351 4348894</p>
                <p className="text-gray-600">Horario: Lunes a Viernes 7:30 - 18:30</p>
              </div>
            </div>

            {/* Grupo 2: Dirección + Horarios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mb-2">
                  📍
                </div>
                <h4 className="font-semibold text-gray-900">Dirección</h4>
                <p className="text-gray-600">Agustín Garzón 1221, B° San Vicente</p>
                <p className="text-gray-600">Córdoba Capital, Córdoba</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mb-2">
                  🕒
                </div>
                <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                <p className="text-gray-600">Lunes a Viernes 7:30 - 18:30</p>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Ubicación</h4>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54474.05544322185!2d-64.24090077832032!3d-31.424360999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd2de6d4a183%3A0x21ac09d735dea18c!2sEscuela%20ProA!5e0!3m2!1ses-419!2sar!4v1756741949589!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Escuela PROA Córdoba"
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
