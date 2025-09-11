import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.post('/register', (req, res) => {
  res.json({ ok: true });
});

app.post('/login', (req, res) => {
  res.json({ ok: true });
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  tasks.push(req.body);
  res.json({ ok: true });
});

const port = 3001;
app.listen(port, () => console.log(`Server running on ${port}`));
