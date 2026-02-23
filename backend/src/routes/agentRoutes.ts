import { Router, Request, Response, NextFunction } from 'express'
import { getAgentStatus, triggerAgentAction } from '../services/agentService'

const router = Router()

// GET /api/agent/status - Get current agent status
router.get('/status', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = await getAgentStatus()
    res.json(status)
  } catch (error) {
    next(error)
  }
})

// GET /api/agent/current-task - Get current task
router.get('/current-task', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = await getAgentStatus()
    res.json({ currentTask: status.currentTask })
  } catch (error) {
    next(error)
  }
})

// POST /api/agent/action - Trigger agent action
router.post('/action', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { action } = req.body
    const result = await triggerAgentAction(action)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

export { router as agentRoutes }
