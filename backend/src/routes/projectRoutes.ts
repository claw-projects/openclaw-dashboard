import { Router } from 'express'
import { getProjects } from '../services/projectService'

const router = Router()

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await getProjects()
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

export { router as projectRoutes }
