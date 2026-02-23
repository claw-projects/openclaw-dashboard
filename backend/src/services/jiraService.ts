import fs from 'fs'
import path from 'path'

interface JiraBoard {
  columns: Array<{
    name: string
    tasks: Array<{
      id: string
      title: string
      status: string
      assignee?: string
      priority?: string
    }>
  }>
}

interface BacklogItem {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'unassigned' | 'ready' | 'in-progress'
  createdAt: string
}

// Service to get Jira board data from file system
export async function getJiraBoard(): Promise<JiraBoard> {
  const boardFile = path.join(process.cwd(), 'workspace', 'jira', 'projects', 'openclaw-dashboard', 'board.json')
  
  try {
    if (fs.existsSync(boardFile)) {
      const data = fs.readFileSync(boardFile, 'utf-8')
      return JSON.parse(data)
    }
    
    // Return default board structure if file doesn't exist
    return {
      columns: [
        {
          name: 'Backlog',
          tasks: [
            {
              id: '1',
              title: 'Create project structure',
              status: 'unassigned',
            },
            {
              id: '2',
              title: 'Set up CI/CD pipeline',
              status: 'unassigned',
            },
          ],
        },
        {
          name: 'To Do',
          tasks: [
            {
              id: '3',
              title: 'Implement main dashboard components',
              status: 'unassigned',
              priority: 'high',
            },
          ],
        },
        {
          name: 'In Progress',
          tasks: [
            {
              id: '4',
              title: 'Backend API development',
              status: 'in-progress',
              assignee: 'dev-team',
              priority: 'high',
            },
          ],
        },
        {
          name: 'Review',
          tasks: [
            {
              id: '5',
              title: 'Set up Docker configuration',
              status: 'review',
              assignee: 'platform-team',
              priority: 'medium',
            },
          ],
        },
        {
          name: 'Done',
          tasks: [
            {
              id: '6',
              title: 'Create README documentation',
              status: 'done',
              assignee: 'dev-team',
              priority: 'low',
            },
          ],
        },
      ],
    }
  } catch (error) {
    console.error('Error reading Jira board:', error)
    return { columns: [] }
  }
}

// Service to get Jira backlog from file system
export async function getJiraBacklog(): Promise<BacklogItem[]> {
  const backlogFile = path.join(process.cwd(), 'workspace', 'jira', 'projects', 'openclaw-dashboard', 'backlog.json')
  
  try {
    if (fs.existsSync(backlogFile)) {
      const data = fs.readFileSync(backlogFile, 'utf-8')
      return JSON.parse(data)
    }
    
    // Return default backlog if file doesn't exist
    return [
      {
        id: '7',
        title: 'Add WebSocket real-time updates',
        description: 'Implement WebSocket connection for live updates',
        priority: 'high',
        status: 'ready',
        createdAt: new Date().toISOString(),
      },
      {
        id: '8',
        title: 'Implement user authentication',
        description: 'Add JWT-based authentication for dashboard access',
        priority: 'medium',
        status: 'unassigned',
        createdAt: new Date().toISOString(),
      },
      {
        id: '9',
        title: 'Add charting library integration',
        description: 'Integrate Recharts for data visualization',
        priority: 'medium',
        status: 'unassigned',
        createdAt: new Date().toISOString(),
      },
    ]
  } catch (error) {
    console.error('Error reading Jira backlog:', error)
    return []
  }
}
