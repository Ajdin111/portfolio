export interface TechTag {
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: TechTag[]
  role?: string
  liveUrl?: string
  githubUrl?: string
  image: string
}

export interface Client {
  id: string
  name: string
  description: string
  liveUrl: string
  image: string
}