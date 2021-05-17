const fs = require('fs').promises;
const express = require('express');
const app = express();
const port = 8081;

app.use(express.raw({
  inflate: true,
  limit: '500kb',
  type: 'application/octet-stream'
}));

app.use(express.static('public'));

app.post('/api/store', async (req, res) => {
  res.send(JSON.stringify(req.body));
  fs.appendFile('./file.mp4', req.body, 'binary');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})