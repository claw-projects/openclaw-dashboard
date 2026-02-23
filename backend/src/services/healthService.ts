import os from 'os'

interface Metrics {
  cpuUsage: number
  memoryUsage: number
  activeSessions: number
  apiRequestsPerMinute: number
  websocketConnections: number
}

// Service to get system health metrics
export async function getHealthMetrics(): Promise<Metrics> {
  // Calculate CPU usage (simplified - in production would use more accurate metrics)
  const cpus = os.cpus()
  const totalCpuTime = cpus.reduce((acc, cpu) => {
    return acc + cpu.times.user + cpu.times.nice + cpu.times.sys
  }, 0)
  const cpuUsage = Math.min(100, Math.random() * 30 + 15) // Simulated CPU usage

  // Calculate memory usage
  const totalMemory = os.totalmem()
  const freeMemory = os.freemem()
  const memoryUsage = Math.min(100, ((totalMemory - freeMemory) / totalMemory) * 100)

  // Get active sessions (simulated)
  const activeSessions = Math.floor(Math.random() * 20) + 10

  // API requests per minute (simulated)
  const apiRequestsPerMinute = Math.floor(Math.random() * 200) + 100

  // WebSocket connections (simulated)
  const websocketConnections = Math.floor(Math.random() * 50) + 30

  return {
    cpuUsage: Math.round(cpuUsage),
    memoryUsage: Math.round(memoryUsage),
    activeSessions,
    apiRequestsPerMinute,
    websocketConnections,
  }
}
