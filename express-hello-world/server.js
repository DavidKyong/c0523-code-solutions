import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req);
  res.send('Hello everyone');
});

app.listen(8080, () => {
  console.log('server listening');
});
