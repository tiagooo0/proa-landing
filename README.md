# Escuela Experimental PROA Córdoba

Sitio web oficial de la Escuela Experimental PROA Córdoba, desarrollado con Next.js 14 y TailwindCSS.

## 🚀 Inicio Rápido

### Instalación

\`\`\`bash
npm install
\`\`\`

### Desarrollo

\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
├── app/                    # Páginas (App Router)
│   ├── page.js            # Página de inicio
│   ├── institucion/       # Información institucional
│   ├── proa/              # Sobre el programa PROA
│   ├── academico/         # Plan de estudios
│   ├── noticias/          # Noticias y [slug]
│   ├── calendario/        # Eventos académicos
│   ├── documentos/        # Documentos descargables
│   ├── admisiones/        # Proceso de inscripción
│   └── contacto/          # Formulario de contacto
├── components/            # Componentes reutilizables
│   ├── NavBar.js         # Navegación principal
│   ├── Footer.js         # Pie de página
│   ├── Hero.js           # Sección hero
│   ├── NewsCard.js       # Tarjeta de noticia
│   ├── Section.js        # Contenedor de sección
│   └── Badge.js          # Componente badge
├── lib/
│   └── data.js           # Datos de ejemplo (EDITAR AQUÍ)
└── public/
    ├── docs/             # Documentos PDF
    └── logo-proa.png     # Logo institucional
\`\`\`

## ✏️ Cómo Editar Contenido

### 📰 Noticias
Edita el array `noticias` en `/lib/data.js`:

\`\`\`javascript
export const noticias = [
  {
    slug: 'mi-nueva-noticia',
    title: 'Título de la Noticia',
    date: '2024-03-15',
    excerpt: 'Resumen breve...',
    content: '<p>Contenido HTML completo...</p>'
  }
]
\`\`\`

### 📅 Eventos
Edita el array `eventos` en `/lib/data.js`:

\`\`\`javascript
export const eventos = [
  {
    id: 1,
    title: 'Nombre del Evento',
    date: '2024-04-15',
    time: '18:00',
    description: 'Descripción del evento...'
  }
]
\`\`\`

### 📄 Documentos
1. Agrega archivos PDF a `/public/docs/`
2. Edita el array `documentos` en `/lib/data.js`

### 🎨 Colores y Estilos
- **Colores principales**: Definidos en `tailwind.config.js` y `globals.css`
- **Brand**: `#60a5fa` (azul celestito)
- **Accent**: `#ef4444` (rojo)

### 🖼️ Logo
Reemplaza `/public/logo-proa.png` con el logo oficial.

## 🛠️ Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TailwindCSS 3**
- **JavaScript** (sin TypeScript)

## 📱 Características

- ✅ Responsive design
- ✅ Accesibilidad (WCAG AA)
- ✅ SEO optimizado
- ✅ Navegación por teclado
- ✅ Formulario de contacto con validación
- ✅ Sistema de noticias dinámico
- ✅ Calendario de eventos
- ✅ Descarga de documentos

## 🎯 Páginas Implementadas

- [x] Inicio (Hero + accesos rápidos + noticias)
- [x] Institución (Historia, misión, visión, autoridades)
- [x] Sobre PROA (Metodología, competencias)
- [x] Académico (Plan de estudios, orientación)
- [x] Noticias (Listado + detalle por slug)
- [x] Calendario (Eventos con exportación .ics)
- [x] Documentos (PDFs descargables)
- [x] Admisiones (Proceso + documentación)
- [x] Contacto (Formulario + información)

## 🔧 Personalización

### Agregar Nueva Página
1. Crea carpeta en `/app/nueva-pagina/`
2. Agrega `page.js` con el componente
3. Actualiza navegación en `NavBar.js`

### Modificar Estilos
- Utilidades CSS en `/app/globals.css`
- Configuración Tailwind en `tailwind.config.js`
- Componentes individuales tienen clases Tailwind

## 📞 Soporte

Para soporte técnico o consultas sobre el desarrollo, contacta al equipo de desarrollo.

---

**Escuela Experimental PROA Córdoba**  
Programa Escuelas PROA – Ministerio de Educación de Córdoba
