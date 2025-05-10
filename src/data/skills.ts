export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'JavaScript', 'Bash']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['FastAPI', 'Flask', 'Streamlit', 'Pandas', 'NumPy']
  },
  {
    category: 'Data & BI',
    items: ['Power BI', 'Jupyter Notebooks', 'Excel avanzado', 'ETL']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQLite', 'MongoDB (básico)']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker (básico)', 'VS Code', 'Linux CLI']
  },
  {
    category: 'Cloud & Deployment',
    items: ['Render', 'Vercel', 'GitHub Pages']
  },
];
