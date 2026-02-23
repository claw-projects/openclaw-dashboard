import { create } from 'zustand'

interface Activity {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: string
  agentId?: string
}

interface ActivityState {
  activities: Activity[]
  maxActivities: number
}

interface ActivityActions {
  addActivity: (activity: Omit<Activity, 'id' | 'timestamp'>) => void
  clearActivities: () => void
}

export const useActivityStore = create<ActivityState & ActivityActions>((set) => ({
  activities: [
    {
      id: '1',
      type: 'success',
      title: 'Dashboard Started',
      message: 'Dashboard application initialized successfully',
      timestamp: new Date(Date.now() - 120000).toISOString(),
    },
    {
      id: '2',
      type: 'info',
      title: 'Subagent Created',
      message: 'Project Manager subagent started',
      timestamp: new Date(Date.now() - 60000).toISOString(),
      agentId: 'pm',
    },
    {
      id: '3',
      type: 'info',
      title: 'Task Assigned',
      message: 'Requirements team assigned to backlog review',
      timestamp: new Date().toISOString(),
      agentId: 'requirements',
    },
  ],
  maxActivities: 100,

  addActivity: (activity) => set((state) => ({
    activities: [
      { ...activity, id: Date.now().toString(), timestamp: new Date().toISOString() },
      ...state.activities.slice(0, state.maxActivities - 1),
    ],
  })),

  clearActivities: () => set({ activities: [] }),
}))