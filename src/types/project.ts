export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: 'powerbi' | 'jupyter' | 'python';
  image: string;
  link?: string;
}