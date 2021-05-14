const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'  // extension name
});

// register in express such engine 'handlebars'
app.engine('hbs', hbs.engine);
// started to use engine 'handlebars'
app.set('view engine', 'hbs');
// path to directory with templates
app.set('views', 'views');
// add static directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
