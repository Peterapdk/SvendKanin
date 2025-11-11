require('dotenv').config();
const express = require('express');
const kilo = require('./kilo');
const gemini = require('./gemini');
const tasks = require('./tasks');

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: "OK" }));

app.get('/api/rabbit', (req, res) => {
  // Replace with MCP DB logic
  res.json({ name: "Fluffy", age: 2, breed: "Dutch" });
});

app.post('/api/journal', async (req, res) => {
  const entry = req.body.entry;
  const geminiResponse = await gemini.askAboutEntry(entry);
  res.json({ journalAI: geminiResponse });
});

app.post('/api/task', async (req, res) => {
  await tasks.saveTask(req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`SvendKanin backend running on ${PORT}`));

module.exports = app;