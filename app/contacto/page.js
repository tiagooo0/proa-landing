"use client"
import { useState } from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

/**
 * Página de contacto
 * Formulario de contacto y información de la institución
 */
export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulación de envío (solo console.log como solicitado)
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado correctamente! (Simulado - ver consola)")

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    })
    setErrors({})
  }

  return (
    <>
      <NavBar />
      <main>
        <Section title="Contacto" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulario */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envianos tu Consulta</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand ${
                        errors.nombre ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand ${
                        errors.mensaje ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Escribí tu consulta aquí..."
                    />
                    {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>}
                  </div>

                  <button type="submit" className="w-full btn btn-brand py-3">
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* Información de Contacto */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@proacordoba.edu.ar</p>
                      <p className="text-gray-600">secretaria@proacordoba.edu.ar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">(0351) 123-4567</p>
                      <p className="text-gray-600">Horario: Lunes a Viernes 8:00 - 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dirección</h4>
                      <p className="text-gray-600">Av. Ejemplo 1234</p>
                      <p className="text-gray-600">Córdoba Capital, Córdoba</p>
                      <p className="text-gray-600">Argentina (CP: 5000)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center">
                      🕒
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 - 12:00 y 14:00 - 17:00</p>
                      <p className="text-gray-600">Sábados: 9:00 - 12:00 (solo secretaría)</p>
                    </div>
                  </div>
                </div>

                {/* Mapa */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Ubicación</h4>
                  <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8158788607!2d-64.18639668485225!3d-31.420083981407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1635789012345!5m2!1ses!2sar"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de la Escuela PROA Córdoba"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
