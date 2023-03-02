const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();
const parser = new Parser();

app.use(cors());

app.get('/rss', async (req, res) => {
  try {
    const feed = await parser.parseURL('http://speedboatdope.com/rss/');
    res.send(feed);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
