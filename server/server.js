const express = require('express')
const app = express()
const port = 3000

app.post('/login', function(req, res) {
  const valid = Joi.validate(req.body, loginSchema).error === null;
  if (!valid) {
    res.status(422).json({
      status: 'error'
      message: 'Invalid request data'
      data: req.body
    });
  } else {
    // happy days - login user
    res.send(`ok`);
  }
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`));