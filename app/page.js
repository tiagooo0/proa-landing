import Link from "next/link"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NewsCard from "../components/NewsCard"
import Section from "../components/Section"
import { noticias } from "../lib/data"

/**
 * Página de inicio
 * Incluye hero, accesos rápidos y últimas noticias
 */
export default function HomePage() {
  const ultimasNoticias = noticias.slice(0, 3)

  const primaryButton = (
    <Link href="/noticias" className="btn btn-brand text-lg px-8 py-3">
      Ver Noticias
    </Link>
  )

  const secondaryButton = (
    <Link href="/admisiones" className="btn btn-outline text-lg px-8 py-3">
      Admisiones
    </Link>
  )

  return (
    <>
      <NavBar />
      <main>
        <Hero
          title="Escuela Experimental PROA Córdoba"
          subtitle="Formamos ciudadanos críticos y competentes para el siglo XXI a través de una educación innovadora centrada en el desarrollo de software y las nuevas tecnologías."
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />

        {/* Accesos Rápidos */}
        <Section title="Accesos Rápidos" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/calendario", title: "Calendario", icon: "📅", desc: "Eventos y fechas importantes" },
              { href: "/documentos", title: "Documentos", icon: "📄", desc: "Reglamentos y formularios" },
              { href: "/admisiones", title: "Admisiones", icon: "🎓", desc: "Proceso de inscripción" },
              { href: "/proa", title: "Sobre PROA", icon: "🏫", desc: "Conocé nuestro programa" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center transition-colors duration-200 group"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
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
    </>
  )
}
