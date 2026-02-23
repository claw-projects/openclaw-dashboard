import React from 'react'
import { useStore } from '@store/useControlStore'

export function ControlPanel() {
  const agentStatus = useStore((state) => state.agentStatus)
  const startAgent = useStore((state) => state.startAgent)
  const stopAgent = useStore((state) => state.stopAgent)
  const restartAgent = useStore((state) => state.restartAgent)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Controls</h2>
      
      <div className="space-y-3">
        <button
          onClick={startAgent}
          disabled={agentStatus === 'online'}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <span className="mr-2">▶</span> Start Agent
        </button>

        <button
          onClick={stopAgent}
          disabled={agentStatus === 'idle' || agentStatus === 'error'}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <span className="mr-2">⏹</span> Stop Agent
        </button>

        <button
          onClick={restartAgent}
          disabled={agentStatus === 'idle'}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <span className="mr-2">↻</span> Restart Agent
        </button>

        <button
          onClick={() => window.location.reload()}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <span className="mr-2">↻</span> Refresh Dashboard
        </button>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-2">System Status</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Dashboard</span>
            <span className="text-emerald-500">Online</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Gateway</span>
            <span className="text-gray-600">Connecting...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
