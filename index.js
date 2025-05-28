const express = require('express');
const app = express();
const port = 3000;

const mockArticles = [
  {
    title: 'Testing article 1',
    category: 'Web development'
  },
  {
    title: 'Testing article 2',
  },
  {
    title: 'Testing article 3',
    category: 'Cyber security'
  },
  {
    title: 'Testing article 4',
    category: 'Video game'
  },
];

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/hello/:name', (req, res) => {
  res.render('pages/hello', { name: req.params.name });
});

app.get('/posts', (req, res) => {
  res.render('pages/posts-list', { posts: mockArticles });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});