import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página Sobre Nosotros
 * Promoción 2025 - PRoA Pucará Sede Centro
 */
export default function SobreNosotrosPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section
          title="🌟 Sobre Nosotros - Promoción 2025 (PRoA Pucará Sede Centro)"
          className="bg-white"
        >
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <p>
              👩‍🎓👨‍🎓 Somos la <strong>Promoción 2025 del PRoA Pucará</strong>, una generación que inició su recorrido
              en los años 2019-2020, justo en los umbrales de una pandemia global. Aquella experiencia nos desafió,
              nos transformó y nos impulsó a desarrollar una identidad única. Nos dejó aprendizajes, ideas,
              inspiración y, sobre todo, una energía que aún hoy continúa guiando nuestro camino ✨.
            </p>

            <p>
              💪 Fuimos la promoción que, con esfuerzo y compromiso, fundó y consolidó el <strong>centro de estudiantes</strong>,
              introduciendo a nuestra escuela en la UES y en la militancia estudiantil 🗣️. También tendimos puentes
              con referentes y figuras destacadas del ámbito educativo, ampliando así los horizontes de nuestra institución 🌍.
            </p>

            <p>
              🛠️ Gracias a la unión y el trabajo colectivo, logramos mejorar nuestra infraestructura: colocamos
              aires acondicionados ❄️ en cada aula, reparamos vidrios y rejas 🪟, sumamos cortinas 🪟, renovamos la página institucional 💻
              y mucho más. Además, participamos en concursos académicos de filosofía 📚, programación 💻, astronomía 🔭 y matemática ➕,
              representando siempre con orgullo a nuestro colegio.
            </p>

            <p>
              🌐 Este sitio web es uno de nuestros <strong>proyectos finales</strong>, pensado como un legado para la comunidad educativa.
              Aquí plasmamos nuestro recorrido, nuestros logros y, sobre todo, nuestra esencia: quiénes somos, quiénes fuimos
              y quiénes aspiramos a ser 🚀.
            </p>

            <p>
              ✨ Deseamos que este espacio refleje nuestro brillo, nuestro compromiso y la huella que dejamos como estudiantes ❤️.
            </p>

            <h3 className="mt-10">👥 Integrantes</h3>
            <ul>
              <li>🎓 Lucas Tuninetti Civarolo</li>
              <li>🎓 Tomas Williams Chapero</li>
              <li>🎓 Tiago Hürst Altamirano</li>
              <li>🎓 Thiago Caballero</li>
              <li>🎓 Bianca Diaz</li>
              <li>🎓 Santiago Matías Ávalo</li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
