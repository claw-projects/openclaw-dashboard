import { create } from 'zustand'
import { useAgentStore } from './useAgentStore'

interface ControlState {
  // Control actions
}

interface ControlActions {
  startAgent: () => void
  stopAgent: () => void
  restartAgent: () => void
  toggleRealtime: () => void
}

export const useControlStore = create<ControlState & ControlActions>((set, get) => ({
  // Actions delegate to agent store
  startAgent: () => {
    const setAgentStatus = useAgentStore.getState().setAgentStatus
    setAgentStatus('online')
  },

  stopAgent: () => {
    const setAgentStatus = useAgentStore.getState().setAgentStatus
    setAgentStatus('idle')
  },

  restartAgent: () => {
    const setAgentStatus = useAgentStore.getState().setAgentStatus
    setAgentStatus('idle')
    setTimeout(() => setAgentStatus('online'), 1000)
  },

  toggleRealtime: () => {
    // Toggle realtime updates
    console.log('Toggle realtime updates')
  },
}))