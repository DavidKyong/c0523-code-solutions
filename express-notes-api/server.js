import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('Listening at port 8000');
});

async function readData() {
  const fileContents = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(fileContents);
  return jsonData;
}

async function writeData(jsonData) {
  await writeFile('data.json', JSON.stringify(jsonData, null, 2));
}

app.get('/api/notes', async (req, res) => {
  try {
    const jsonData = await readData();
    const arr = [];
    for (const key in jsonData.notes) {
      arr.push(jsonData.notes[key]);
    }
    if (!jsonData) {
      res.json([]);
    }
    res.status(200).json(arr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readData();
    const id = Number(req.params.id);
    if (id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (jsonData.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.status(200).json(jsonData.notes[id]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const { content } = req.body;
    const jsonData = await readData();
    if (!content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const newContent = {
      id: jsonData.nextId,
      content,
    };
    jsonData.notes[newContent.id] = newContent;
    jsonData.nextId++;
    await writeData(jsonData);
    res.status(201).json(newContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    const jsonData = await readData();
    if (jsonData.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete jsonData.notes[id];
    await writeData(jsonData);
    res.sendStatus(204);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (id <= 0) {
      await res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    const { content } = req.body;
    if (content === undefined) {
      res.status(404).json({ error: 'content is a required field' });
      return;
    }
    const jsonData = await readData();
    if (jsonData.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    const newContent = { id, content };
    jsonData.notes[id].content = newContent;
    await writeData(jsonData);
    res.json(newContent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});
