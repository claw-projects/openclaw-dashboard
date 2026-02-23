import React from 'react'
import { useProjectStore } from '@store/useProjectStore'

export function ProjectBoard() {
  const projects = useProjectStore((state) => state.projects)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-amber-500'
      case 'low':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Projects</h2>
      
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${getPriorityColor(project.priority)}`}></span>
                <span className="font-medium text-gray-900">{project.name}</span>
              </div>
              <span className="text-sm text-gray-500">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  project.progress === 100 ? 'bg-emerald-500' : 'bg-primary-500'
                }`} 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-600">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
