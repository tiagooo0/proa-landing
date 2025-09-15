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
        <Section title="Admisiones" className="bg-white">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* 1er Año - Ciclo Lectivo 2025 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Matrícula de 1er. Año — CICLO LECTIVO 2026
              </h3>
              

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Documentación requerida para inscripción definitiva
                </h4>

                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Constancia original de haber aprobado 6° grado.</li>
                  <li>
                    Fotocopia de partida de nacimiento
                    <span className="italic"> — si proviene de otra provincia, debe estar legalizada</span>.
                  </li>
                  <li>Fotocopia del Certificado de Vacunas: Antituberculosa (B.C.G.) y Doble D.T.</li>
                  <li>
                    Ficha Médica e Informe de Salud (C.U.S e I.S.A.).
                    <span className="italic"> El CUS se debe presentar en original y copia.</span>
                  </li>
                  <li>
                    Dos fotocopias de DNI y Certificado de domicilio actualizado
                    <span className="italic"> en caso de no constar en el documento</span>.
                  </li>
                  <li>Fotocopia de DNI de madre y padre.</li>
                </ul>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-md p-4">
                    <p className="text-sm font-semibold text-gray-900">Fechas de presentación</p>
                    <p className="text-gray-700">21 y 22/12/2025 — de 9 a 13 hs</p>
                    <p className="text-gray-700">19 y 20/02/2026 — de 9 a 13 hs</p>
                  </div>
                  <div className="bg-white rounded-md p-4">
                    <p className="text-sm font-semibold text-gray-900">Plazo límite</p>
                    <p className="text-gray-700">
                      Hasta el viernes <span className="font-semibold">29/03/2026</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingresantes de 2° a 6° año */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ingresantes de 2° a 6° año</h3>

              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Pase provisorio de escuela de origen / Constancia de documentos.</li>
                  <li>Partida de nacimiento.</li>
                  <li>
                    Dos fotocopias de DNI y Certificado de domicilio actualizado
                    <span className="italic"> en caso de no constar en el documento</span>.
                  </li>
                  <li>Fotocopia de DNI de madre y padre.</li>
                  <li>Ficha Médica e Informe de Salud (C.U.S e I.S.A.).</li>
                </ul>
              </div>
            </div>

            {/* Pie con datos del encabezado del documento */}
            <div className="text-sm text-gray-500">
              <p>
                Escuela Experimental con énfasis en T.I.C. — PRO-A sede Capital Centro ·
                Agustín Garzón 1221, B° San Vicente · Cód. de Empresa: 1E003114449 · CUE: 1405474-00
              </p>
            </div>

          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
