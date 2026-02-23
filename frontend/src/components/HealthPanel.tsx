import React from 'react'
import { useStore } from '@store/useHealthStore'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export function HealthPanel() {
  const metrics = useStore((state) => state.metrics)
  const metricsHistory = useStore((state) => state.metricsHistory)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">System Health</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-600 text-sm">CPU Usage</div>
          <div className="text-2xl font-bold text-dark">{metrics.cpuUsage}%</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-600 text-sm">Memory</div>
          <div className="text-2xl font-bold text-dark">{metrics.memoryUsage}%</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-gray-600 text-sm">Active Sessions</div>
          <div className="text-2xl font-bold text-dark">{metrics.activeSessions}</div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metricsHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="timestamp" hide />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0' }}
              itemStyle={{ color: '#6366f1' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="cpuUsage" 
              name="CPU Usage" 
              stroke="#6366f1" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="memoryUsage" 
              name="Memory Usage" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
