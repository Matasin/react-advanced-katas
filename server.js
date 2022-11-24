import express from 'express';
import cors from 'cors';
const app = express();

var corsOptions = {
  origin: '*'
};

app.use(express.json());
const items = [];

app.all('/', cors(corsOptions), async (req, res) => {
  await new Promise(r => setTimeout(r, 1000));

  if (req.method === 'POST') {
    const { text } = req.body;

    if (Math.random() > 0.7) {
      res.status(500);
      res.json({ message: 'Could not add item!' });
      return;
    }

    const newTodo = { id: Math.random().toString(), text: text.toUpperCase() };
    items.push(newTodo);
    res.json(newTodo);
    return;
  } else {
    res.json({
      ts: Date.now(),
      items,
    });
  }
}
);

app.listen(8000);
