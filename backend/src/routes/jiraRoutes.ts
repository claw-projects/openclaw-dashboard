import { Router } from 'express'
import { getJiraBoard, getJiraBacklog } from '../services/jiraService'

const router = Router()

// GET /api/jira/board - Get Jira board data
router.get('/board', async (req, res) => {
  try {
    const board = await getJiraBoard()
    res.json(board)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Jira board' })
  }
})

// GET /api/jira/backlog - Get Jira backlog
router.get('/backlog', async (req, res) => {
  try {
    const backlog = await getJiraBacklog()
    res.json(backlog)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Jira backlog' })
  }
})

export { router as jiraRoutes }
