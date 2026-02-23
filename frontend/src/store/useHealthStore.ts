import { create } from 'zustand'

interface Metrics {
  cpuUsage: number
  memoryUsage: number
  activeSessions: number
  apiRequestsPerMinute: number
  websocketConnections: number
}

interface HealthState {
  metrics: Metrics
  metricsHistory: Array<Metrics & { timestamp: string }>
}

interface HealthActions {
  updateMetrics: (metrics: Partial<Metrics>) => void
  addMetricsHistory: (metrics: Metrics) => void
  clearHistory: () => void
}

export const useHealthStore = create<HealthState & HealthActions>((set, get) => ({
  metrics: {
    cpuUsage: 25,
    memoryUsage: 35,
    activeSessions: 12,
    apiRequestsPerMinute: 150,
    websocketConnections: 45,
  },
  metricsHistory: Array.from({ length: 10 }, (_, i) => ({
    cpuUsage: 25 + Math.random() * 10,
    memoryUsage: 35 + Math.random() * 5,
    activeSessions: 10 + Math.floor(Math.random() * 5),
    apiRequestsPerMinute: 100 + Math.floor(Math.random() * 50),
    websocketConnections: 40 + Math.floor(Math.random() * 10),
    timestamp: new Date(Date.now() - (9 - i) * 60000).toISOString(),
  })),

  updateMetrics: (updates) => {
    const newMetrics = { ...get().metrics, ...updates }
    set({ metrics: newMetrics })
    // Keep last 100 data points
    const history = [...get().metricsHistory.slice(-99), { ...newMetrics, timestamp: new Date().toISOString() }]
    set({ metricsHistory: history })
  },

  addMetricsHistory: (metrics) => {
    const history = [...get().metricsHistory.slice(-99), { ...metrics, timestamp: new Date().toISOString() }]
    set({ metricsHistory: history })
  },

  clearHistory: () => set({ metricsHistory: [] }),
}))
