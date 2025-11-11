# Architecture Overview

SvendKanin is built as a serverless app with these main components:
- **Frontend:** Next.js (React), deployable to Vercel/Netlify
- **Backend:** Express/Kilo code/MCP service connectors, deployable to Vercel Serverless Functions or Railway
- **Database:** Neon (PostgreSQL), Railway (MongoDB/PostgreSQL), or Upstash (Redis Cache)
- **AI:** Google Gemini API SDK
- **Dev Environment:** GitHub Codespaces with devcontainer support
- **MCP Servers:** Upstash, Neon, Railway