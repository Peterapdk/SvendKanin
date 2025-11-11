#!/bin/bash

echo "🔄 Installing frontend/backend dependencies..."
cd backend && npm install
cd ../frontend && npm install
cd ..

echo "✅ Done! Now set up your backend .env file as described in docs/deploy-guide.md"