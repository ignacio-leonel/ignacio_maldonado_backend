import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Data Analytics Dashboard',
    description: 'Interactive data visualization dashboard for business analytics with real-time filtering and comprehensive metrics.',
    technologies: ['PowerBI', 'DAX', 'SQL'],
    type: 'powerbi',
    image: 'https://images.pexels.com/photos/7947779/pexels-photo-7947779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'project2',
    title: 'Sales Performance Analysis',
    description: 'Comprehensive analysis of sales data with trend identification, forecasting models, and actionable insights.',
    technologies: ['PowerBI', 'M Query', 'Excel'],
    type: 'powerbi',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'project3',
    title: 'Machine Learning Predictions',
    description: 'Predictive modeling notebook with data preprocessing, feature engineering, and model evaluation techniques.',
    technologies: ['Jupyter', 'Pandas', 'Scikit-learn'],
    type: 'jupyter',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'project4',
    title: 'Data Exploration Toolkit',
    description: 'Custom-built toolkit for exploratory data analysis with visualization capabilities and statistical modeling.',
    technologies: ['Jupyter', 'Matplotlib', 'NumPy'],
    type: 'jupyter',
    image: 'https://images.pexels.com/photos/4386150/pexels-photo-4386150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'project5',
    title: 'API Integration Service',
    description: 'Microservice for seamless third-party API integration with caching, rate limiting, and error handling.',
    technologies: ['Python', 'FastAPI', 'Docker'],
    type: 'python',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'project6',
    title: 'Data ETL Pipeline',
    description: 'Automated data extraction, transformation, and loading pipeline with monitoring and failure recovery.',
    technologies: ['Python', 'Pandas', 'PostgreSQL'],
    type: 'python',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];