import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.listen(8080, () => {
  console.log('Listening at port 8080');
});

app.get('/api/grades', (req, res) => {
  const getGrades = [];
  for (const key in grades) {
    getGrades.push(grades[key]);
  }
  res.json(getGrades);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('Incomplete request');
    return;
  }
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});
