#!/bin/bash
set -e

# Ensure Node.js version matches the requirement
if command -v nvm &> /dev/null; then
  nvm use
fi

# Build the application if not already built
if [ ! -f "dist/server.js" ]; then
  echo "Building application..."
  npm run build
fi

# Start the server
npm start
