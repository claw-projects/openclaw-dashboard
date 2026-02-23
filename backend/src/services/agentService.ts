import fs from 'fs'
import path from 'path'

// Service to get agent status from file system
export async function getAgentStatus() {
  const statusFile = path.join(process.cwd(), 'workspace', 'jira', 'projects', 'openclaw-dashboard', 'status.json')
  
  try {
    if (fs.existsSync(statusFile)) {
      const data = fs.readFileSync(statusFile, 'utf-8')
      return JSON.parse(data)
    }
    
    // Return default status if file doesn't exist
    return {
      status: 'idle',
      timestamp: new Date().toISOString(),
      currentTask: 'Waiting for tasks...',
    }
  } catch (error) {
    console.error('Error reading agent status:', error)
    return {
      status: 'error',
      timestamp: new Date().toISOString(),
      currentTask: 'Error reading status',
    }
  }
}

// Service to trigger agent action
export async function triggerAgentAction(action: string) {
  // For now, return success - in production, this would communicate with the gateway
  return {
    success: true,
    action,
    timestamp: new Date().toISOString(),
    message: `Action '${action}' processed successfully`,
  }
}
