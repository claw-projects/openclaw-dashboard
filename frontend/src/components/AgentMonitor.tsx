import React from 'react'
import { useStore } from '@store/useAgentStore'

export function AgentMonitor() {
  const agentStatus = useStore((state) => state.agentStatus)
  const currentTask = useStore((state) => state.currentTask)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-emerald-500'
      case 'busy':
        return 'bg-amber-500'
      case 'idle':
        return 'bg-slate-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-slate-500'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Agent Status</h2>
      
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full ${getStatusColor(agentStatus)} flex items-center justify-center`}>
          <span className="text-white font-bold text-2xl">O</span>
        </div>
        <div>
          <div className="text-2xl font-bold text-dark">Main Agent</div>
          <div className="text-gray-600">Status: {agentStatus}</div>
        </div>
      </div>

      {currentTask && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-1">Current Task</h3>
          <p className="text-gray-900">{currentTask}</p>
        </div>
      )}
    </div>
  )
}
