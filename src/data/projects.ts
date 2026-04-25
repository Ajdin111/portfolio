import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'nexcrm',
    title: 'NexCRM',
    description: 'A full-stack CRM application for managing customer relationships, contacts, and sales pipelines. Built with a focus on clean UI and real-time data handling.',
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
      { label: 'PostgreSQL' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Ajdin111/NexCRM',
    image: '',
  },
  {
    id: 'event-management',
    title: 'Intelligent Event Management',
    description: 'A team-built event management platform handling event creation, registration, and attendee management. I was responsible for [your role here].',
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
      { label: 'MongoDB' },
    ],
    role: 'Full-stack Developer',
    liveUrl: '',
    githubUrl: 'https://github.com/Ajdin111/intelligent-event-management',
    image: '',
  },
  {
    id: 'retro-game-archive',
    title: 'Retro Game Archive',
    description: 'A web application for browsing and cataloguing retro games. [Add your description here].',
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Ajdin111/retro-game-archive',
    image: '',
  },
]