import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página Institución
 * Historia, misión, visión y autoridades de la escuela
 */
export default function InstitucionPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Nuestra Institución" className="bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Historia */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historia</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  La Escuela Experimental PROA Córdoba nació en 2020 como parte del programa provincial "Escuelas PROA"
                  del Ministerio de Educación de Córdoba, con el objetivo de transformar la educación secundaria a
                  través de metodologías innovadoras y tecnología de vanguardia.
                </p>
                <p>
                  Desde sus inicios, nuestra institución se ha caracterizado por implementar el Aprendizaje Basado en
                  Proyectos (ABP), la interdisciplinariedad y la integración de las Tecnologías de la Información y
                  Comunicación (TIC) en todos los procesos educativos.
                </p>
                <p>
                  En 2022, incorporamos la orientación en Desarrollo de Software, convirtiéndonos en referentes en la
                  formación de jóvenes programadores y desarrolladores en la provincia.
                </p>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                <p className="text-gray-600">
                  Formar ciudadanos críticos, creativos y competentes para el siglo XXI, brindando una educación
                  integral que combine excelencia académica con valores humanos, preparando a nuestros estudiantes para
                  los desafíos del mundo digital y tecnológico.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                <p className="text-gray-600">
                  Ser reconocidos como la institución educativa líder en innovación pedagógica y formación tecnológica
                  en Córdoba, contribuyendo al desarrollo de una sociedad más justa, inclusiva y tecnológicamente
                  avanzada.
                </p>
              </div>
            </div>

            {/* Autoridades */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Autoridades</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍🏫</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Prof. María González</h4>
                  <p className="text-brand font-medium">Directora</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Licenciada en Ciencias de la Educación, especialista en innovación pedagógica
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍🏫</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Prof. Carlos Rodríguez</h4>
                  <p className="text-brand font-medium">Vicedirector</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Ingeniero en Sistemas, especialista en tecnologías educativas
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Lic. Ana Martínez</h4>
                  <p className="text-brand font-medium">Secretaria Académica</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Licenciada en Administración Educativa, gestión académica
                  </p>
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
