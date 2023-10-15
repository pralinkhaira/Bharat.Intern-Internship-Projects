// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; // You can choose any port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Welcome to your Project Management Tool!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
