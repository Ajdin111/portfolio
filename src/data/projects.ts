import type { Project } from '../types'
import teqevent from '../assets/teqevent.png'
import retro from '../assets/retro.png'

export const projects: Project[] = [
    {
    id: 'event-management',
    title: 'Intelligent Event Management',
    description: 'A full-stack event management platform built with a team of four, featuring event creation, registration, and attendee management. Integrates a machine learning module for smart event recommendations and attendance prediction.',
    tags: [
      { label: 'React' },
      { label: 'FastAPI' },
      { label: 'PostgresSQL' },
    ],
    role: '',
    liveUrl: '',
    githubUrl: 'https://github.com/Ajdin111/intelligent-event-management',
    image: teqevent,
  },
  {
    id: 'retro-game-archive',
    title: 'Retro Game Archive',
    description: 'A full stack web application for browsing and cataloguing retro games.',
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
      { label: 'Firebase' },
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Ajdin111/retro-game-archive',
    image: retro,
  },
]