const express = require('express');
const channels = require('./data_store.json');

console.log('JSON Data:   ', channels);

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/channels', (req, res) => {
  res.json({ channels });
});

app.get('/messages/:channel', (req, res) => {
  res.json({ messages: channels[req.params.channel] });
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
