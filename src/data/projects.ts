export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
  client: string;
  role: string;
  year: string;
  challenge: string;
  solution: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'proyecto-nba-expansion',
    title: 'Proyecto NBA Expansion',
    description: 'Simulador interactivo y gestor de expansión de franquicias para la NBA, que recrea drafts de expansión con límites salariales reales, finanzas de equipo y gestión de plantillas.',
    image: '/images/project-nba.png',
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    demo: 'https://demo.nbaexpansion.com',
    github: 'https://github.com/laglera/Proyecto_NBA_Expansion',
    client: 'Proyecto Académico / Open Source',
    role: 'Full Stack Developer',
    year: '2026',
    challenge: 'Diseñar un algoritmo eficiente para el Draft de Expansión de la NBA, respetando las complejas reglas de límite salarial (Salary Cap) y protección de jugadores de las franquicias existentes, garantizando transacciones consistentes sin desbordar el rendimiento de la base de datos.',
    solution: 'Implementamos transacciones ACID robustas en PostgreSQL gestionadas por Spring Boot en el backend para asegurar la integridad del Draft. Diseñamos una interfaz interactiva en React y TypeScript para que el usuario funcione y gestione de forma intuitiva los fichajes y presupuestos en tiempo real.',
    features: [
      'Simulación del Draft de Expansión de la NBA con reglas reales de protección de plantilla.',
      'Gestión financiera avanzada de la franquicia (Salary Cap, Luxury Tax, ingresos de taquilla y contratos).',
      'Algoritmo inteligente de IA para simular el comportamiento de fichajes de otros GMs de la liga.',
      'Panel analítico interactivo con visualización de estadísticas históricas de jugadores y proyecciones de potencial.'
    ]
  },
  {
    slug: 'synapse-canvas',
    title: 'Synapse Canvas',
    description: 'Pizarra colaborativa en tiempo real diseñada para equipos ágiles. Permite conectar ideas, mapear flujos, añadir notas adhesivas y colaborar mediante múltiples cursores sutiles.',
    image: '/images/project-synapse.png',
    tags: ['TypeScript', 'HTML5 Canvas', 'WebSockets', 'Node.js', 'Express'],
    demo: 'https://demo.synapse.com',
    github: 'https://github.com',
    client: 'Agile Teams Startup',
    role: 'Full Stack Engineer',
    year: '2025',
    challenge: 'Sincronizar el estado físico de miles de elementos vectoriales en un lienzo infinito entre cientos de usuarios activos de manera simultánea sin generar conflictos de renderizado ni desbordar la memoria del navegador.',
    solution: 'Desarrollamos un protocolo de sincronización diferencial basado en WebSockets nativos en Node.js, reduciendo los paquetes de datos al mínimo absoluto. Optimizamos el renderizado del lienzo mediante un árbol espacial (Quadtree) para actualizar únicamente los elementos visibles en el viewport.',
    features: [
      'Lienzo infinito acelerado por hardware con zooms y paneos ultra fluidos.',
      'Sincronización multi-usuario en tiempo real (<20ms de latencia).',
      'Cursores y punteros virtuales flotantes con atenuación de paralaje de los usuarios conectados.',
      'Persistencia instantánea de datos en bases de datos NoSQL con copias de seguridad cada 5 minutos.'
    ]
  },
  {
    slug: 'devflow-editor',
    title: 'DevFlow Editor',
    description: 'Editor de código colaborativo en tiempo real basado en la nube. Integra el motor Monaco Editor con soporte para múltiples lenguajes, chat en vivo y terminales virtuales compartidos.',
    image: '/images/project-devflow.png',
    tags: ['Next.js', 'React', 'Monaco Editor', 'Socket.io', 'Docker'],
    demo: 'https://demo.devflow.com',
    github: 'https://github.com',
    client: 'EdTech Code Academy',
    role: 'Lead Full Stack Dev',
    year: '2025',
    challenge: 'Lograr una edición compartida concurrente sin conflictos tipográficos (Conflict-free Replicated Data Types - CRDT) e integrar terminales virtuales seguras ejecutadas en servidores sin comprometer la seguridad del servidor anfitrión.',
    solution: 'Integramos algoritmos Yjs para el control de edición concurrente sin conflictos dentro del motor Monaco Editor. Contenerizamos las terminales virtuales mediante sandboxing robusto en Docker, comunicándolas a través de WebSockets aislados y restringidos.',
    features: [
      'Edición de código multi-usuario sin conflictos tipo Google Docs.',
      'Terminal Linux virtual integrada y aislada por sandbox en Docker.',
      'Chat de audio y texto integrado en tiempo real sobre la barra lateral del editor.',
      'Autocompletado de código inteligente (IntelliSense) mediante modelos locales de IA.'
    ]
  }
];
