const express = require('express');
const app = express();
const PORT = 3000;

function hello(name) {
    return 'Hello World from ' + name + "!";
  }

app.get('/', (req, res) => {
    res.json({"text": hello("Nikita")});
  });



  if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }

  module.exports = { app, hello };
