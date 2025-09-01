import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import NewsCard from "../../components/NewsCard"
import { noticias } from "../../lib/data"

/**
 * Página de listado de noticias
 * Muestra todas las noticias disponibles en formato de cards
 */
export default function NoticiasPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Noticias" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia) => (
              <NewsCard
                key={noticia.slug}
                slug={noticia.slug}
                title={noticia.title}
                date={noticia.date}
                excerpt={noticia.excerpt}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
