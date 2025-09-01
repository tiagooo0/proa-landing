import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página Académico
 * Información sobre el plan de estudios y orientación
 */
export default function AcademicoPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Plan de Estudios" className="bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Ciclo Básico */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ciclo Básico (1º - 3º año)</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  El Ciclo Básico proporciona una formación integral con materias comunes que establecen las bases para
                  la especialización posterior.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Lengua y Literatura",
                    "Matemática",
                    "Ciencias Naturales",
                    "Ciencias Sociales",
                    "Educación Física",
                    "Inglés",
                    "Educación Artística",
                    "Educación Tecnológica",
                    "Formación Ética y Ciudadana",
                    "Introducción a la Programación",
                    "Pensamiento Computacional",
                    "Robótica Educativa",
                  ].map((materia) => (
                    <div key={materia} className="bg-white p-3 rounded border">
                      <span className="text-sm font-medium text-gray-700">{materia}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ciclo Orientado */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ciclo Orientado (4º - 6º año) - Desarrollo de Software
              </h3>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  La orientación en Desarrollo de Software prepara a los estudiantes para el mundo de la programación y
                  las tecnologías de la información, combinando teoría y práctica.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Materias Generales */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Materias Generales</h4>
                    <div className="space-y-2">
                      {[
                        "Lengua y Literatura",
                        "Matemática",
                        "Historia",
                        "Geografía",
                        "Inglés",
                        "Educación Física",
                        "Filosofía",
                        "Formación para el Trabajo",
                      ].map((materia) => (
                        <div key={materia} className="bg-white p-3 rounded border">
                          <span className="text-sm font-medium text-gray-700">{materia}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Materias de Orientación */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Materias de Orientación</h4>
                    <div className="space-y-2">
                      {[
                        "Algoritmos y Programación",
                        "Bases de Datos",
                        "Redes y Comunicaciones",
                        "Desarrollo Web Frontend",
                        "Desarrollo Web Backend",
                        "Ingeniería de Software",
                        "Testing y Calidad de Software",
                        "Seguridad Informática",
                        "Proyectos Integradores",
                        "Prácticas Profesionalizantes",
                      ].map((materia) => (
                        <div key={materia} className="bg-white p-3 rounded border border-brand">
                          <span className="text-sm font-medium text-brand">{materia}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tecnologías y Herramientas */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Tecnologías y Herramientas que Aprenderás
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                      "JavaScript",
                      "Python",
                      "React",
                      "Node.js",
                      "MySQL",
                      "MongoDB",
                      "Git",
                      "HTML/CSS",
                      "Java",
                      "C#",
                      "Docker",
                      "AWS",
                    ].map((tech) => (
                      <div key={tech} className="bg-gray-800 text-white p-2 rounded text-center text-sm font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proyectos Destacados */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Proyectos Destacados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-gray-900 mb-2">4º Año - Sistema de Gestión</h5>
                      <p className="text-sm text-gray-600">
                        Desarrollo de un sistema web para gestión escolar con base de datos.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-gray-900 mb-2">5º Año - Aplicación Móvil</h5>
                      <p className="text-sm text-gray-600">
                        Creación de una app móvil con funcionalidades avanzadas y API REST.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-gray-900 mb-2">6º Año - Proyecto Integrador</h5>
                      <p className="text-sm text-gray-600">
                        Desarrollo completo de una solución tecnológica para un cliente real.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h5 className="font-semibold text-gray-900 mb-2">Prácticas Profesionalizantes</h5>
                      <p className="text-sm text-gray-600">
                        Experiencia laboral en empresas tecnológicas de la región.
                      </p>
                    </div>
                  </div>
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
