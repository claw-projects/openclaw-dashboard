import { create } from 'zustand'

interface AgentState {
  agentStatus: 'online' | 'idle' | 'busy' | 'error'
  currentTask: string
  timestamp: Date
}

interface AgentActions {
  setAgentStatus: (status: AgentState['agentStatus']) => void
  setCurrentTask: (task: string) => void
  updateTimestamp: () => void
  reset: () => void
}

export const useAgentStore = create<AgentState & AgentActions>((set) => ({
  agentStatus: 'idle',
  currentTask: 'Initializing...',
  timestamp: new Date(),

  setAgentStatus: (agentStatus) => set({ agentStatus }),
  setCurrentTask: (currentTask) => set({ currentTask }),
  updateTimestamp: () => set({ timestamp: new Date() }),
  reset: () => set({ agentStatus: 'idle', currentTask: 'Initializing...', timestamp: new Date() }),
}))
