/**
 * Componente Badge reutilizable
 * Props: children, variant ('default', 'accent'), className
 */
export default function Badge({ children, variant = "default", className = "" }) {
  const baseClasses = "badge"
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    accent: "badge-accent",
  }

  return <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>
}
