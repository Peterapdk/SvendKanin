# Deploy Guide

## Frontend
- Use Vercel, Netlify, or Railway (one-click GitHub deployments)
- Set up environment variables for backend API URLs

## Backend
- Deploy via Vercel serverless (API routes) or Railway (Express app)
- MCP Services: Connect to Upstash/Neon/Railway using service secrets in `.env`

## Database
- Neon: serverless PostgreSQL, free-tier setup, branch-based environments
- Upstash: Redis cache/pub-sub
- Railway: PostgreSQL/MongoDB, seamless with backend

## Gemini AI
- Obtain API key, save as `GEMINI_API_KEY` in backend `.env`
- Calls supported via backend `gemini.js`

## Codespace Devcontainer
- Launch Codespace, install dependencies automatically
- Dedicated workspace with Kilo code and MCP tools

See docs/kilo.md, docs/gemini.md for integration specifics.