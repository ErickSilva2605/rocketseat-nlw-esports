import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json([
    {id:1, name: 'Erick'},
    {id:2, name: 'Erick'},
    {id:3, name: 'Erick'},
  ]);
});

app.listen(3333);