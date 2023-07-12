import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('Listening at port 8000');
});

app.get('/api/notes', async (req, res) => {
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);
  const arr = [];
  for (const key in jsonData.notes) {
    arr.push(jsonData.notes[key]);
  }
  try {
    if (!jsonData) {
      res.json([]);
    }
    res.status(200).json(arr);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);

  try {
    if (id <= 0) {
      await res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (!jsonData.notes[id]) {
      await res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    await res.status(200).json(jsonData.notes[id]);
    return;
  } catch (error) {
    console.error(error);
  }
});

let nextId = 10;

app.post('/api/notes', async (req, res) => {
  const { content } = req.body;
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);

  const newContent = {
    id: nextId++,
    content,
  };

  try {
    if (!content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    jsonData.nextId++;
    jsonData.notes[newContent.id] = newContent;

    await writeFile('data.json', JSON.stringify(jsonData, null, 2));

    res.status(201).json(newContent);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);

  try {
    if (id <= 0) {
      await res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (!jsonData.notes[id]) {
      await res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete jsonData.notes[id];
    await writeFile('data.json', JSON.stringify(jsonData, null, 2));
    res.sendStatus(204);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { content } = req.body;
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);

  try {
    if (id <= 0) {
      await res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (!jsonData.notes[id] && !content) {
      await res.status(404).json({ error: 'content is a required field' });
      return;
    }

    jsonData.notes[id].content = content;

    await writeFile('data.json', JSON.stringify(jsonData, null, 2));

    res.status(200).json(jsonData.notes[id]);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});
