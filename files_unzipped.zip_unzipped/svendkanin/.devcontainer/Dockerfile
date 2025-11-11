FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

# Optional Python (for MCP tooling, samples)
RUN apt-get update && apt-get install -y python3-pip

# Kilo code CLI install
RUN npm install -g kilocode

# MCP tooling
RUN npm install -g upstash-cli railway vercel neon-cli

# MongoDB client
RUN apt-get update && apt-get install -y mongodb-clients

WORKDIR /workspace/svendkanin