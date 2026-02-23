import React from 'react'
import { useStore } from '@store/useSubagentStore'

export function SubagentGrid() {
  const subagents = useStore((state) => state.subagents)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800'
      case 'idle':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-gray-100 text-gray-800'
      case 'error':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Subagents</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {subagents.map((subagent) => (
          <div key={subagent.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{subagent.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subagent.status)}`}>
                {subagent.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 truncate" title={subagent.currentTask}>
              {subagent.currentTask || 'No active task'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
