// Example MCP server integration
// Here we’d connect to Redis or MongoDB via Upstash, Neon, Railway, etc.

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

async function saveTask(task) {
  const client = new MongoClient(uri);
  await client.connect();
  const col = client.db('svendkanin').collection('tasks');
  await col.insertOne(task);
  await client.close();
}

module.exports = { saveTask };