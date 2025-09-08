import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página de admisiones
 * Información sobre el proceso de inscripción
 */
export default function AdmisionesPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Admisiones 2025" className="bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Proceso de Admisión */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Admisión</h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Consulta e Información",
                    description:
                      "Participá de nuestras jornadas informativas o contactanos para conocer más sobre nuestra propuesta educativa.",
                    icon: "💬",
                  },
                  {
                    step: 2,
                    title: "Preinscripción Online",
                    description:
                      "Completá el formulario de preinscripción en el sitio oficial del Ministerio de Educación de Córdoba.",
                    icon: "💻",
                  },
                  {
                    step: 3,
                    title: "Entrega de Documentación",
                    description:
                      "Presentá la documentación requerida en los plazos establecidos por el cronograma oficial.",
                    icon: "📄",
                  },
                  {
                    step: 4,
                    title: "Confirmación de Vacante",
                    description: "Recibí la confirmación de tu vacante y completá el proceso de matriculación.",
                    icon: "✅",
                  },
                ].map((paso) => (
                  <div key={paso.step} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold">
                        {paso.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{paso.icon}</span>
                        <h4 className="text-lg font-semibold text-gray-900">{paso.title}</h4>
                      </div>
                      <p className="text-gray-600">{paso.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentación Requerida */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Documentación Requerida</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Certificado de estudios primarios completos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Fotocopia de DNI del estudiante y responsables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Certificado de nacimiento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Certificado de vacunación completo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Constancia de CUIL</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>2 fotos 4x4 actuales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-brand">•</span>
                    <span>Autorización de uso de imagen (descargar desde Documentos)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fechas Importantes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fechas Importantes 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Preinscripción Online</h4>
                  <p className="text-gray-600 mb-2">15 de Septiembre - 15 de Octubre 2024</p>
                  <p className="text-sm text-gray-500">A través del sitio oficial del Ministerio</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrega de Documentación</h4>
                  <p className="text-gray-600 mb-2">20 de Octubre - 30 de Noviembre 2024</p>
                  <p className="text-sm text-gray-500">En horarios de secretaría</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Confirmación de Vacantes</h4>
                  <p className="text-gray-600 mb-2">15 de Diciembre 2024</p>
                  <p className="text-sm text-gray-500">Notificación por email y teléfono</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Inicio de Clases</h4>
                  <p className="text-gray-600 mb-2">3 de Marzo 2025</p>
                  <p className="text-sm text-gray-500">Jornada de bienvenida</p>
                </div>
              </div>
            </div>

         
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
