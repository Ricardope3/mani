const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = 8000

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

module.exports = app;


