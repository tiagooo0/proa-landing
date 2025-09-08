import Link from "next/link"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import NewsCard from "../components/NewsCard"
import Section from "../components/Section"
import ImageCarousel from "../components/ImageCarousel"
import FloatingContactButton from "../components/FloatingContactButton"
import { noticias } from "../lib/data"

/**
 * Página de inicio
 * Incluye carrusel de imágenes, hero, accesos rápidos y últimas noticias
 */
export default function HomePage() {
  const ultimasNoticias = noticias.slice(0, 3)

  const primaryButton = (
    <Link href="/noticias" className="btn btn-brand text-lg px-8 py-3">
      Ver Noticias
    </Link>
  )

  const secondaryButton = (
    <Link
      href="/admisiones"
      className="btn btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900"
    >
      Admisiones
    </Link>
  )

  return (
    <>
      <NavBar />
      <main>
        <section className="relative">
          <ImageCarousel />
          {/* Hero content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Escuela Experimental PRoA Córdoba</h1>
              <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
                Formamos ciudadanos críticos y competentes para el siglo XXI a través de una educación innovadora
                centrada en el desarrollo de software y las nuevas tecnologías.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryButton}
                {secondaryButton}
              </div>
            </div>
          </div>
        </section>
{/* Accesos Rápidos */}
<Section title="Accesos Rápidos" className="bg-white">
  {/* Contenedor centrado y con ancho máximo para que no se abra de más */}
  <div className="mx-auto max-w-5xl">
    {/* Centro el grupo de tarjetas */}
    <div className="flex flex-wrap justify-center gap-6">
      {[
        { href: "/calendario", title: "Calendario", icon: "📅", desc: "Eventos y fechas importantes" },
        { href: "/admisiones", title: "Admisiones", icon: "🎓", desc: "Proceso de inscripción" },
        { href: "/proa", title: "Sobre PRoA", icon: "🏫", desc: "Conocé nuestro programa" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          // ancho fijo para que el centrado sea perfecto y no se estire
          className="w-[260px] sm:w-[280px] bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center transition-colors duration-200 group flex flex-col items-center justify-center"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </Link>
      ))}
    </div>
  </div>
</Section>




        {/* Últimas Noticias */}
        <Section title="Últimas Noticias" className="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ultimasNoticias.map((noticia) => (
              <NewsCard
                key={noticia.slug}
                slug={noticia.slug}
                title={noticia.title}
                date={noticia.date}
                excerpt={noticia.excerpt}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/noticias" className="btn btn-brand">
              Ver Todas las Noticias
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  )
}
