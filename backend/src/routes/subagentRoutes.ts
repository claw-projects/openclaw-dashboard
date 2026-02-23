import { Router } from 'express'
import { getSubagents } from '../services/subagentService'

const router = Router()

// GET /api/subagents - Get list of subagents
router.get('/', async (req, res) => {
  try {
    const subagents = await getSubagents()
    res.json(subagents)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subagents' })
  }
})

export { router as subagentRoutes }
