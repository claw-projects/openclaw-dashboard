import { Router } from 'express'
import { getHealthMetrics } from '../services/healthService'

const router = Router()

// GET /api/health - Get system health metrics
router.get('/', async (req, res) => {
  try {
    const metrics = await getHealthMetrics()
    res.json(metrics)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch health metrics' })
  }
})

export { router as healthRoutes }
