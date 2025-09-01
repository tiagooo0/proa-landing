import "./globals.css"

export const metadata = {
  title: "Escuela Experimental PROA Córdoba",
  description:
    "Escuela secundaria experimental con orientación en Desarrollo de Software. Programa Escuelas PROA del Ministerio de Educación de Córdoba.",
  keywords: "escuela, PROA, Córdoba, desarrollo software, educación secundaria", 
  icons: {
    icon: "/favicon.ico",
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
