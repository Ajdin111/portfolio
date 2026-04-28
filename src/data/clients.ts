import type { Client } from '../types'
import optical from '../assets/optical.png'
import easytabs from '../assets/easy-tabs.png'
import podcast from '../assets/podcast.jpg'
import isaa from '../assets/isaa-kamini.png'
import singral from '../assets/singral.png'
import unsa from '../assets/unsa.png'
import kec from '../assets/kec.ba.png'

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Optical Gallery',
    description: 'Retail website for a Sarajevo optical store, featuring product collections and contact information.',
    liveUrl: 'https://www.opticalgallery.ba/',
    image: optical,
  },
  {
    id: 'client-7',
    name: 'UNSA-30 godina',
    description: 'Bilingual CMS-powered commemorative website for the University of Sarajevo, marking the 30th anniversary of the Srebrenica genocide and the Dayton Peace Agreement."',
    liveUrl: 'https://30godina.unsa.ba/',
    image: unsa,
  },
  {
    id: 'client-4',
    name: 'Isaa Kamini',
    description: 'CMS-powered product website for a fireplace company, featuring their full catalogue of fireplaces',
    liveUrl: 'https://www.isaa.ba/',
    image: isaa,
  },
  {
    id: 'client-6',
    name: 'Kulturno-edukativni centar',
    description: 'Website for a Sarajevo cultural and educational centre, showcasing their programmes, community initiatives and events.',
    liveUrl: 'https://kec.ba/',
    image: kec,
  },
  {
    id: 'client-5',
    name: 'Singral',
    description: 'Website for a Sarajevo-based construction company specialising in residential and commercial renovation and finishing works.',
    liveUrl: 'https://singral.ba/',
    image: singral,
  },
  {
    id: 'client-2',
    name: 'Easy Tabs',
    description: 'Multilingual product website for a German eco-friendly cleaning brand, featuring product categories.',
    liveUrl: 'https://easy-tabs.webflow.io/',
    image: easytabs,
  },
  {
    id: 'client-3',
    name: 'Sunray Podcast',
    description: 'Podcast website with episode archive, streaming integration, and show information.',
    liveUrl: '',
    image: podcast,
  },
]