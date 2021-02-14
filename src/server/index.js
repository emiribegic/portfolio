const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allows cross-origin requests
const path = require('path');
const app = express();
const port = process.env.PORT || 8082;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('dist/index.html'));

app.listen(port, () => console.log(`Running on localhost ${port}`));
