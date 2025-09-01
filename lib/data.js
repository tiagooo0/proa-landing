/**
 * Datos de ejemplo para el sitio
 * Para agregar/editar contenido, modifica estos arrays
 */

export const noticias = [
  {
    slug: "inicio-ciclo-lectivo-2024",
    title: "Inicio del Ciclo Lectivo 2024",
    date: "2024-03-01",
    excerpt:
      "Damos la bienvenida a todos los estudiantes y familias al nuevo ciclo lectivo. Este año continuamos fortaleciendo nuestra propuesta educativa con nuevos proyectos y desafíos.",
    content: `
      <p>El pasado 1 de marzo dimos inicio al ciclo lectivo 2024 con gran entusiasmo y expectativas renovadas. Este año recibimos a más de 300 estudiantes distribuidos en los seis años de la educación secundaria.</p>
      
      <p>Durante la jornada de apertura, la Directora Prof. María González destacó los logros del año anterior y presentó los nuevos proyectos que se implementarán durante 2024, incluyendo:</p>
      
      <ul>
        <li>Laboratorio de Robótica y Programación</li>
        <li>Programa de Intercambio con empresas tecnológicas</li>
        <li>Nuevos talleres de Inteligencia Artificial</li>
        <li>Proyecto de Sustentabilidad Ambiental</li>
      </ul>
      
      <p>Invitamos a toda la comunidad educativa a acompañarnos en este nuevo desafío de formar ciudadanos críticos y competentes para el siglo XXI.</p>
    `,
  },
  {
    slug: "feria-ciencias-tecnologia",
    title: "Feria de Ciencias y Tecnología 2024",
    date: "2024-02-15",
    excerpt:
      "Nuestros estudiantes presentaron proyectos innovadores en la Feria Provincial de Ciencias y Tecnología, obteniendo reconocimientos destacados en las categorías de programación y robótica.",
    content: `
      <p>Con gran orgullo compartimos los resultados de la participación de nuestros estudiantes en la Feria Provincial de Ciencias y Tecnología 2024, donde obtuvieron destacados reconocimientos.</p>
      
      <p>Los proyectos presentados incluyeron:</p>
      
      <ul>
        <li><strong>1er Premio en Programación:</strong> "Sistema de Gestión Escolar" - 6to año</li>
        <li><strong>2do Premio en Robótica:</strong> "Robot Asistente para Personas Mayores" - 5to año</li>
        <li><strong>Mención Especial:</strong> "App de Reciclaje Inteligente" - 4to año</li>
      </ul>
      
      <p>Felicitamos a todos los estudiantes participantes y a los docentes que los acompañaron en este proceso de aprendizaje y crecimiento.</p>
    `,
  },
  {
    slug: "convenio-universidad-tecnologica",
    title: "Convenio con Universidad Tecnológica Nacional",
    date: "2024-01-20",
    excerpt:
      "Firmamos un importante convenio con la UTN Córdoba que permitirá a nuestros estudiantes acceder a laboratorios especializados y programas de articulación universitaria.",
    content: `
      <p>La Escuela Experimental PROA Córdoba firmó un convenio marco con la Universidad Tecnológica Nacional - Facultad Regional Córdoba, que abre nuevas oportunidades para nuestros estudiantes.</p>
      
      <p>Este acuerdo incluye:</p>
      
      <ul>
        <li>Acceso a laboratorios de la UTN para prácticas avanzadas</li>
        <li>Programa de articulación para ingreso directo a carreras afines</li>
        <li>Charlas y talleres dictados por docentes universitarios</li>
        <li>Participación en proyectos de investigación</li>
        <li>Becas de estudio para estudiantes destacados</li>
      </ul>
      
      <p>Esta alianza estratégica fortalece nuestro compromiso con la excelencia académica y la preparación de nuestros estudiantes para los desafíos del futuro.</p>
    `,
  },
  {
    slug: "proyecto-app-movil-estudiantes",
    title: "Estudiantes Desarrollan App Móvil para la Comunidad",
    date: "2024-01-10",
    excerpt:
      "Un grupo de estudiantes de 6to año desarrolló una aplicación móvil para conectar a los vecinos del barrio y facilitar el intercambio de servicios comunitarios.",
    content: `
      <p>En el marco del proyecto integrador de 6to año, un grupo de estudiantes desarrolló "ConectaBarrio", una aplicación móvil innovadora que busca fortalecer los lazos comunitarios.</p>
      
      <p>La aplicación permite:</p>
      
      <ul>
        <li>Intercambio de servicios entre vecinos</li>
        <li>Organización de eventos comunitarios</li>
        <li>Alertas de seguridad y emergencias</li>
        <li>Marketplace local para emprendedores</li>
        <li>Foro de discusión sobre temas del barrio</li>
      </ul>
      
      <p>El proyecto fue desarrollado utilizando React Native y Firebase, tecnologías que los estudiantes aprendieron durante su formación en la orientación de Desarrollo de Software.</p>
      
      <p>La app ya cuenta con más de 200 usuarios registrados y ha facilitado más de 50 intercambios de servicios en la comunidad.</p>
    `,
  },
]

export const eventos = [
  {
    id: 1,
    title: "Reunión de Padres - 1er Trimestre",
    date: "2024-04-15",
    time: "18:00",
    description: "Reunión informativa sobre el rendimiento académico del primer trimestre.",
  },
  {
    id: 2,
    title: "Feria de Proyectos Tecnológicos",
    date: "2024-05-20",
    time: "14:00",
    description: "Exposición de proyectos desarrollados por estudiantes de 4to, 5to y 6to año.",
  },
  {
    id: 3,
    title: "Charla: Inteligencia Artificial en la Educación",
    date: "2024-06-10",
    time: "16:00",
    description: "Conferencia magistral sobre el impacto de la IA en los procesos educativos.",
  },
  {
    id: 4,
    title: "Acto del Día de la Bandera",
    date: "2024-06-20",
    time: "10:00",
    description: "Ceremonia conmemorativa del Día de la Bandera con participación de toda la comunidad educativa.",
  },
  {
    id: 5,
    title: "Hackathon Estudiantil",
    date: "2024-07-15",
    time: "09:00",
    description: "Competencia de programación de 24 horas para estudiantes de ciclo orientado.",
  },
  {
    id: 6,
    title: "Muestra de Arte y Tecnología",
    date: "2024-08-25",
    time: "15:00",
    description: "Exposición interdisciplinaria que combina arte digital y programación creativa.",
  },
]

export const documentos = [
  {
    id: 1,
    title: "Reglamento Interno",
    filename: "reglamento-interno.pdf",
    description: "Normativas y reglamentaciones de la institución.",
    size: "2.3 MB",
  },
  {
    id: 2,
    title: "Cronograma Académico 2024",
    filename: "cronograma-2024.pdf",
    description: "Calendario académico con fechas importantes del ciclo lectivo.",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "Autorización de Uso de Imagen",
    filename: "autorizacion-imagen.pdf",
    description: "Formulario de autorización para uso de imagen de estudiantes.",
    size: "0.5 MB",
  },
]
