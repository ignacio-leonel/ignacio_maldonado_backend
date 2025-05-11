export interface Project {
  id: string;
  title: string; 
  description: string;
  technologies: string[];
  type: 'powerbi' | 'jupyter' | 'python'| 'website';
  image: string;
  link?: string;
}