const express = require('express');
const bodyParser = require('body-parser');
const orm = require('./orm');

const tableName = "shopping_list_items";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('client/build'));
app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
  const dbResult = orm.readAll(tableName);
  dbResult.then((result) => {
    res.send(result.rows);
  })
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  const dbResult = orm.create(newItem, tableName);
  dbResult.then(result => {
    res.status(201);
    res.send('SUCCESS');
  });
});

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
})
