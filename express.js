const express = require('express');
const app = express();
app.get('/api/items', (req, res) => {
  res.json([...]);
});
app.post('/api/items', (req, res) => {
  const newItem = { name: req.body.name };
  res.json(newItem);
});
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
