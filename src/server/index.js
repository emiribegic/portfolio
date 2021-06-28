const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.listen(port, () => console.log(`Running on localhost ${port}`));
