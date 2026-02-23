import React from 'react'
import { AgentMonitor } from '@components/AgentMonitor'
import { SubagentGrid } from '@components/SubagentGrid'
import { ProjectBoard } from '@components/ProjectBoard'
import { HealthPanel } from '@components/HealthPanel'
import { ActivityFeed } from '@components/ActivityFeed'
import { ControlPanel } from '@components/ControlPanel'

function App() {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-dark">OpenClaw Dashboard</h1>
        <p className="text-gray-600">Real-time monitoring and management</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AgentMonitor />
          <HealthPanel />
          <ActivityFeed />
        </div>
        <div className="space-y-6">
          <SubagentGrid />
          <ProjectBoard />
          <ControlPanel />
        </div>
      </div>
    </div>
  )
}

export default App
