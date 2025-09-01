import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import Badge from "../../components/Badge"

/**
 * Página Sobre PROA
 * Información sobre el programa PROA y metodología educativa
 */
export default function ProaPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section className="bg-white">
          <div className="text-center mb-8">
            <Badge variant="accent" className="mb-4">
              Programa Escuelas PROA – Ministerio de Educación de Córdoba
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">¿Qué es PROA?</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PROA es un programa educativo innovador que transforma la educación secundaria a través de metodologías
              activas y tecnología de vanguardia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Misión y Visión del Programa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión PROA</h3>
                <p className="text-gray-600">
                  Desarrollar competencias del siglo XXI en los estudiantes a través de metodologías innovadoras que
                  promuevan el pensamiento crítico, la creatividad y la colaboración.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión PROA</h3>
                <p className="text-gray-600">
                  Formar ciudadanos preparados para los desafíos del futuro, capaces de adaptarse a un mundo en
                  constante cambio y contribuir al desarrollo de la sociedad.
                </p>
              </div>
            </div>

            {/* Metodologías */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestras Metodologías</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Aprendizaje Basado en Proyectos (ABP)</h4>
                  <p className="text-gray-600 text-sm">
                    Los estudiantes aprenden a través de proyectos reales que conectan el conocimiento teórico con
                    aplicaciones prácticas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">🔗</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interdisciplinariedad</h4>
                  <p className="text-gray-600 text-sm">
                    Integramos diferentes áreas del conocimiento para abordar problemas complejos desde múltiples
                    perspectivas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">💻</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Integración de TIC</h4>
                  <p className="text-gray-600 text-sm">
                    Las tecnologías de la información son herramientas transversales en todos los procesos de enseñanza
                    y aprendizaje.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Evaluación por Competencias</h4>
                  <p className="text-gray-600 text-sm">
                    Evaluamos el desarrollo integral de competencias, no solo conocimientos memorísticos.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">🤝</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Vinculación Comunitaria</h4>
                  <p className="text-gray-600 text-sm">
                    Conectamos el aprendizaje con las necesidades reales de la comunidad local.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">🎨</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Creatividad e Innovación</h4>
                  <p className="text-gray-600 text-sm">
                    Fomentamos el pensamiento creativo y la capacidad de innovar en todas las áreas del conocimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Competencias del Siglo XXI */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Competencias del Siglo XXI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Competencias Cognitivas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pensamiento crítico y resolución de problemas</li>
                    <li>• Creatividad e innovación</li>
                    <li>• Metacognición y autorregulación</li>
                    <li>• Alfabetización digital</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Competencias Socioemocionales</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comunicación efectiva</li>
                    <li>• Colaboración y trabajo en equipo</li>
                    <li>• Liderazgo y responsabilidad</li>
                    <li>• Adaptabilidad y flexibilidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Section title="Oferta educativa" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-600">
              <p>
                El programa escolar del ProA Centro ofrece a sus estudiantes una formación innovadora y
                actualizada en el campo de la tecnología y el desarrollo de software. Con jornadas de doble
                escolaridad, su propósito principal es preparar a los jóvenes para los desafíos del mundo
                digital, brindándoles herramientas que les permitan comprender, diseñar y crear software, al
                mismo tiempo que se favorece su futura inserción en el ámbito laboral.
              </p>
              <p>
                La propuesta académica abarca lenguajes de programación, lógica computacional, bases de datos,
                robótica y desarrollo de aplicaciones, promoviendo en los estudiantes el pensamiento crítico,
                la creatividad y la resolución de problemas. A su vez, el modelo educativo contempla espacios de
                tutorías personalizadas que acompañan los distintos ritmos de aprendizaje, así como la
                participación en clubes, talleres y actividades que enriquecen la experiencia escolar.
              </p>
              <p>
                El ProA Centro cuenta con laboratorios equipados con tecnología de última generación y otorga
                especial relevancia al aprendizaje del inglés aplicado a la informática, una competencia clave
                para acceder a oportunidades académicas y profesionales a nivel internacional.
              </p>
              <p>
                Al concluir sus estudios, los egresados reciben el título de Bachiller en Desarrollo de
                Software, lo que amplía sus posibilidades de continuar estudios superiores o de incorporarse
                directamente al sector tecnológico.
              </p>
            </div>
          </div>
        </Section>
        </Section>
      </main>
      <Footer />
    </>
  )
}
