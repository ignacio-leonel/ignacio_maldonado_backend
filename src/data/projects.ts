import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'sistema_gestion_academica',
    title: 'Sistema de Gestión Académica',
    description: 'Sistema basado en Python diseñado para instituciones educativas para gestionar operaciones académicas. (Trabajo en progreso)',
    technologies: ['Python', 'SQL', 'VSC', 'Git'],
    type: 'python',
    link: 'https://github.com/ignacio-leonel/sistema_gestion_academica',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }, 
  {
    id: 'ventas_china',
    title: 'Análisis de Ventas de Supermercado - China',
    description: 'Análisis de datos reales de ventas de supermercados en China para identificar tendencias y métricas de rendimiento.',
    technologies: ['Python', 'Pandas', 'Jupyter Notebook'],
    type: 'jupyter',
    link:'https://github.com/ignacio-leonel/ventas_china',
    image: 'https://images.pexels.com/photos/942320/pexels-photo-942320.jpeg',
  },
  {
    id: 'yxaworld',
    title: 'Dashboard de Ventas - YXA World',
    description: 'Análisis y reporte completo de ventas utilizando Power BI para obtener insights de negocio.',
    technologies: ['Power BI', 'Visualización de Datos'],
    type: 'powerbi',
    link:'https://github.com/ignacio-leonel/yxaworld',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'analisis_de_gdp',
    title: 'Análisis del PBI por País y Continente',
    description: 'Análisis exploratorio de datos sobre el Producto Bruto Interno en distintos países y continentes.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    type: 'jupyter',
    link:'https://github.com/ignacio-leonel/analisis_de_gdp',
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'analisis_ebay',
    title: 'Análisis de Ventas de Guitarras en eBay',
    description: 'Web scraping y análisis de datos sobre ventas de guitarras en eBay, con enfoque en datos segmentados.',
    technologies: ['Python', 'Jupyter Notebook', 'Web Scraping'],
    type: 'jupyter',
    link:'https://github.com/ignacio-leonel/Analisis_Ebay',
    image: 'https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'portfolio_web',
    title: 'Portfolio Personal de Desarrollador',
    description: 'Sitio web responsivo que muestra mis proyectos de backend y análisis de datos, habilidades, y opciones de contacto directo (WhatsApp, LinkedIn), creado desde cero con tecnologías web modernas.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js', 'Vercel'],
    type: 'website',
    link: 'https://ignacio-maldonado-backend.vercel.app/',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
];
