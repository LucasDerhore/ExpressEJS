const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});