// Create web server with express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});

const comments = [
  {username: 'alice', content: 'first comment'},
  {username: 'bob', content: 'second comment'}
];