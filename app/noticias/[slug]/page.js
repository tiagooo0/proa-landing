import { notFound } from "next/navigation"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import Section from "../../../components/Section"
import { noticias } from "../../../lib/data"

/**
 * Página de detalle de noticia
 * Muestra el contenido completo de una noticia específica
 */
export default function NoticiaPage({ params }) {
  const noticia = noticias.find((n) => n.slug === params.slug)

  if (!noticia) {
    notFound()
  }

  return (
    <>
      <NavBar />
      <main>
        <Section className="bg-white">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="text-sm text-gray-500 mb-2">
                <time dateTime={noticia.date}>
                  {new Date(noticia.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{noticia.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{noticia.excerpt}</p>
            </header>

            {/* Imagen de la noticia */}
            {noticia.image && (
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full h-96 object-cover mb-8 rounded"
              />
            )}

            <div
              className="prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />
          </article>
        </Section>
      </main>
      <Footer />
    </>
  )
}

// Generar parámetros estáticos para todas las noticias
export function generateStaticParams() {
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }))
}
