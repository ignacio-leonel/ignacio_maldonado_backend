export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'JavaScript/TypeScript', 'Bash']
  },
  {
    category: 'Frameworks',
    items: ['FastAPI', 'Flask', 'Django', 'Express.js']
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
  },
  {
    category: 'Tools',
    items: ['Docker', 'Git', 'Jupyter', 'PowerBI']
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud', 'Heroku']
  },
];