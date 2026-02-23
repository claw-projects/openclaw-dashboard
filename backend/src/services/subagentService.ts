import fs from 'fs'
import path from 'path'

interface Subagent {
  id: string
  name: string
  status: 'active' | 'idle' | 'completed' | 'error'
  currentTask: string
}

// Service to get subagents from file system
export async function getSubagents(): Promise<Subagent[]> {
  const subagentsFile = path.join(process.cwd(), 'workspace', 'jira', 'projects', 'openclaw-dashboard', 'subagents.json')
  
  try {
    if (fs.existsSync(subagentsFile)) {
      const data = fs.readFileSync(subagentsFile, 'utf-8')
      return JSON.parse(data)
    }
    
    // Return default subagents if file doesn't exist
    return [
      {
        id: 'pm',
        name: 'Project Manager',
        status: 'active',
        currentTask: 'Coordinating teams',
      },
      {
        id: 'requirements',
        name: 'Requirements',
        status: 'idle',
        currentTask: 'Reviewing backlog',
      },
      {
        id: 'dev',
        name: 'Development',
        status: 'active',
        currentTask: 'Implementing features',
      },
      {
        id: 'qe',
        name: 'Quality Engineering',
        status: 'idle',
        currentTask: 'Writing test cases',
      },
      {
        id: 'design',
        name: 'Design',
        status: 'active',
        currentTask: 'Creating wireframes',
      },
    ]
  } catch (error) {
    console.error('Error reading subagents:', error)
    return []
  }
}
