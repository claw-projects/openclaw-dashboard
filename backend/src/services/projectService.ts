import fs from 'fs'
import path from 'path'

interface Project {
  id: string
  name: string
  description: string
  priority: 'low' | 'medium' | 'high'
  progress: number
  status: 'backlog' | 'todo' | 'in-progress' | 'review' | 'done'
  assignees: string[]
}

// Service to get projects from file system
export async function getProjects(): Promise<Project[]> {
  const projectsFile = path.join(process.cwd(), 'workspace', 'jira', 'projects', 'openclaw-dashboard', 'projects.json')
  
  try {
    if (fs.existsSync(projectsFile)) {
      const data = fs.readFileSync(projectsFile, 'utf-8')
      return JSON.parse(data)
    }
    
    // Return default projects if file doesn't exist
    return [
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
    ]
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}
