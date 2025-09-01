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
    El ProA Capital Centro se fundó en el año 2014 en el Barrio de los Cuartetos, donde funcionó durante sus
    primeros años. En ese espacio comenzó a consolidarse como una escuela innovadora dentro del programa ProA,
    ofreciendo a los estudiantes una propuesta educativa distinta centrada en la programación y la tecnología.
  </p>
  <p>
    En 2018, la institución se trasladó a su actual ubicación en Agustín Garzón 1221, lo que permitió contar con
    un edificio más adecuado y con mejores condiciones para el desarrollo de sus actividades escolares.
  </p>
  <p>
    Desde entonces, el ProA Capital Centro actualmente cuenta con más de 10 años y continúa creciendo y formando
    a jóvenes con una preparación sólida en desarrollo de software.
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
                  <h4 className="text-lg font-semibold text-gray-900">Sandra Cerutti</h4>
                  <p className="text-brand font-medium">Directora</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Licenciada en Ciencias de la Educación, especialista en innovación pedagógica
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍🏫</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">David Muller</h4>
                  <p className="text-brand font-medium">Coordinador de sede</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Ingeniero en Sistemas, especialista en tecnologías educativas
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Evelina Cena</h4>
                  <p className="text-brand font-medium">Coordinadora de sede</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Licenciada en Administración Educativa, gestión académica
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Eugenia Ferrero</h4>
                  <p className="text-brand font-medium">Coordinadora de curso</p>
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
