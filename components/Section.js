/**
 * Componente contenedor de sección reutilizable
 * Props: title, children, className
 * Proporciona padding consistente y título opcional
 */
export default function Section({ title, children, className = "" }) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
