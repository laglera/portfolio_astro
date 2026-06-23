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
    slug: 'clima-energia-espana',
    title: 'Clima y Energía en España',
    description: 'Pipeline de datos que cruza temperatura diaria (Open-Meteo) con demanda eléctrica (Red Eléctrica de España / ESIOS) para varias ciudades españolas, y un dashboard interactivo para explorar la relación entre ambas variables.',
    image: '/images/Group 1.png',
    tags: ['Python', 'PostgreSQL', 'Docker', 'Streamlit', 'APIs'],
    demo: '',
    github: 'https://github.com/laglera/clima-energia-espana',
    client: 'Proyecto Personal',
    role: '',
    year: 'Junio 2026',
    challenge: 'Extraer, limpiar y cruzar eficientemente datos reales de dos fuentes públicas independientes con distinta granularidad temporal (datos horarios y diarios) sin sobrecargar los límites de las APIs ni comprometer la integridad de la base de datos.',
    solution: 'Implementamos un pipeline ETL modular en Python. Diseñamos un flujo que orquesta la extracción de datos desde las APIs de Open-Meteo y ESIOS (REE), los unifica en Pandas, y los almacena en PostgreSQL contenedorizado mediante Docker Compose, exponiendo los resultados finales en un dashboard interactivo con Streamlit.',
    features: [
      'Pipeline ETL automatizado en Python para extracción, transformación y carga (ETL).',
      'Integración de APIs públicas reales (Open-Meteo para datos climáticos e ESIOS para demanda eléctrica de España).',
      'Base de datos relacional PostgreSQL levantada en contenedor Docker para persistencia estructurada de los datos unificados.',
      'Dashboard analítico interactivo con Streamlit para la visualización de la relación temperatura/demanda en tiempo real.'
    ]
  }
];
