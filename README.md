# Openclaw Dashboard

A comprehensive monitoring and management dashboard for the OpenClaw ecosystem.

## Overview

The OpenClaw Dashboard provides real-time visibility into:
- Main agent status and current tasks
- Active subagents (teams)
- Project board with Kanban-style task tracking
- System health metrics
- Jira board integration

## Architecture

### Tech Stack

#### Frontend
- React 18+ with TypeScript
- Vite 5+ for development and builds
- Zustand for state management
- Tailwind CSS for styling
- Chart.js for data visualization
- WebSocket client for real-time updates

#### Backend
- Node.js 20+ LTS
- Express.js framework
- RESTful API with JWT authentication
- WebSocket server for real-time updates

#### Data Storage
- In-memory state management
- Local file system persistence (workspace/jira/projects/)
- Session data with periodic checkpointing

## Project Structure

```
openclaw-dashboard/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── store/         # Zustand state management
│   │   ├── utils/         # Utility functions
│   │   └── App.tsx        # Main app component
│   ├── public/            # Static assets
│   └── package.json
│
├── backend/               # Express.js server
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business logic
│   │   └── server.ts      # Server entry point
│   └── package.json
│
├── docs/                  # Documentation
├── docker/                # Docker configuration
└── docker-compose.yml     # Docker Compose setup
```

## Getting Started

### Prerequisites

- Node.js 20+ LTS
- Docker and Docker Compose (optional)

### Development Setup

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
npm run dev
```

### Docker Deployment

```bash
docker-compose up -d
```

## Configuration

See `.env.example` in both frontend and backend directories for configuration options.

Key environment variables:
- `NODE_ENV`: Development/Production
- `PORT`: Server port (default: 3000)
- `GATEWAY_URL`: OpenClaw Gateway WebSocket URL
- `GATEWAY_TOKEN`: Authentication token for gateway

## API Documentation

### Backend Endpoints

- `GET /api/agent/status` - Main agent current status
- `GET /api/agent/current-task` - Main agent's current task
- `GET /api/subagents` - List of all subagents with status
- `GET /api/projects` - All projects with status
- `GET /api/health` - System health metrics
- `POST /api/agent/action` - Trigger agent action
- `GET /api/jira/board` - Jira board data
- `GET /api/jira/backlog` - Jira backlog

### WebSocket Events

- `agent_status` - Agent status updates
- `subagent_update` - Subagent activity changes
- `project_update` - Project state changes
- `health_update` - System metrics updates
- `heartbeat` - Connection health checks

## Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

## Deployment

### Docker

```bash
docker-compose up -d --build
```

### Manual Deployment

```bash
# Backend
cd backend
npm install
npm run build
node dist/server.js

# Frontend
cd frontend
npm install
npm run build
# Serve static files from dist/ directory
```

## Development

### Code Quality

```bash
# Lint
npm run lint

# Format
npm run format

# Type check
npm run typecheck
```

### CI/CD

GitHub Actions workflow is included for automated testing and deployment.

## License

MIT

## Support

For issues and questions, please contact the Development Team.
