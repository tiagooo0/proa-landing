import "./globals.css"
import { ThemeProvider } from "../components/ThemeProvider"

export const metadata = {
  title: "Escuela Experimental PROA Córdoba",
  description:
    "Escuela secundaria experimental con orientación en Desarrollo de Software. Programa Escuelas PROA del Ministerio de Educación de Córdoba.",
  keywords: "escuela, PROA, Córdoba, desarrollo software, educación secundaria",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
