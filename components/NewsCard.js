import Link from "next/link"

/**
 * Tarjeta de noticia reutilizable
 * Props: slug, title, date, excerpt
 * Para modificar el diseño, edita las clases Tailwind aquí
 */
export default function NewsCard({ slug, title, date, excerpt }) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/noticias/${slug}`}
          className="inline-flex items-center text-brand hover:text-blue-700 font-medium transition-colors duration-200"
        >
          Leer más
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
