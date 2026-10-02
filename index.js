const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let items = [
  { id: 1, name: 'First item' },
  { id: 2, name: 'Second item' },
];
let nextId = 3;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

app.post('/items', (req, res) => {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ error: 'name is required' });
  const item = { id: nextId++, name };
  items.push(item);
  res.status(201).json(item);
});

app.delete('/items/:id', (req, res) => {
  const index = items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  items.splice(index, 1);
  res.status(204).end();
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
