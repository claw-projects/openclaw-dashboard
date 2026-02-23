import { create } from 'zustand'

interface Project {
  id: string
  name: string
  description: string
  priority: 'low' | 'medium' | 'high'
  progress: number
  status: 'backlog' | 'todo' | 'in-progress' | 'review' | 'done'
  assignees: string[]
  dueDate?: Date
}

interface ProjectState {
  projects: Project[]
}

interface ProjectActions {
  addProject: (project: Project) => void
  updateProject: (id: string, updates: Partial<Project>) => void
  removeProject: (id: string) => void
  setProjects: (projects: Project[]) => void
  clearProjects: () => void
}

export const useProjectStore = create<ProjectState & ProjectActions>((set) => ({
  projects: [
    {
      id: 'openclaw-dashboard',
      name: 'OpenClaw Dashboard',
      description: 'Main dashboard for OpenClaw ecosystem monitoring',
      priority: 'high',
      progress: 25,
      status: 'in-progress',
      assignees: ['dev-team', 'design-team'],
    },
    {
      id: 'api-documentation',
      name: 'API Documentation',
      description: 'Comprehensive API documentation and examples',
      priority: 'medium',
      progress: 10,
      status: 'backlog',
      assignees: ['dev-team'],
    },
    {
      id: 'mobile-app',
      name: 'Mobile App',
      description: 'Mobile dashboard for on-the-go monitoring',
      priority: 'low',
      progress: 0,
      status: 'backlog',
      assignees: [],
    },
  ],

  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
  })),
  removeProject: (id) => set((state) => ({
    projects: state.projects.filter((p) => p.id !== id),
  })),
  setProjects: (projects) => set({ projects }),
  clearProjects: () => set({ projects: [] }),
}))
