import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req);
  res.send({ name: 'David' });
});

app.listen(8080, () => {
  console.log('server listening');
});
