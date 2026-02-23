import { create } from 'zustand'

interface Subagent {
  id: string
  name: string
  status: 'active' | 'idle' | 'completed' | 'error'
  currentTask: string
  startTime?: Date
  endTime?: Date
}

interface SubagentState {
  subagents: Subagent[]
}

interface SubagentActions {
  addSubagent: (subagent: Subagent) => void
  updateSubagent: (id: string, updates: Partial<Subagent>) => void
  removeSubagent: (id: string) => void
  setSubagents: (subagents: Subagent[]) => void
  clearSubagents: () => void
}

export const useSubagentStore = create<SubagentState & SubagentActions>((set) => ({
  subagents: [
    {
      id: 'pm',
      name: 'Project Manager',
      status: 'active',
      currentTask: 'Coordinating teams',
    },
    {
      id: 'requirements',
      name: 'Requirements',
      status: 'idle',
      currentTask: 'Reviewing backlog',
    },
    {
      id: 'dev',
      name: 'Development',
      status: 'active',
      currentTask: 'Implementing features',
    },
    {
      id: 'qe',
      name: 'Quality Engineering',
      status: 'idle',
      currentTask: 'Writing test cases',
    },
    {
      id: 'design',
      name: 'Design',
      status: 'active',
      currentTask: 'Creating wireframes',
    },
  ],

  addSubagent: (subagent) => set((state) => ({ subagents: [...state.subagents, subagent] })),
  updateSubagent: (id, updates) => set((state) => ({
    subagents: state.subagents.map((s) => (s.id === id ? { ...s, ...updates } : s)),
  })),
  removeSubagent: (id) => set((state) => ({
    subagents: state.subagents.filter((s) => s.id !== id),
  })),
  setSubagents: (subagents) => set({ subagents }),
  clearSubagents: () => set({ subagents: [] }),
}))
