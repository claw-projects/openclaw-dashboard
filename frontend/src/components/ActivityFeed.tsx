import React from 'react'
import { useActivityStore } from '@store/useActivityStore'

export function ActivityFeed() {
  const activities = useActivityStore((state) => state.activities)

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-500'
      case 'success':
        return 'bg-emerald-500'
      case 'warning':
        return 'bg-amber-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Activity Feed</h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
            <div className={`w-2 h-2 mt-2 rounded-full ${getActivityTypeColor(activity.type)}`}></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900">{activity.title}</span>
                <span className="text-xs text-gray-500">{activity.timestamp}</span>
              </div>
              <div className="text-sm text-gray-600">{activity.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
