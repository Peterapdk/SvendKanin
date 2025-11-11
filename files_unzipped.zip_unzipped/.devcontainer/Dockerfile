FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

RUN apt-get update && apt-get install -y python3-pip
RUN npm install -g kilocode upstash-cli railway vercel neon-cli

RUN apt-get update && apt-get install -y mongodb-clients

WORKDIR /workspace/svendkanin