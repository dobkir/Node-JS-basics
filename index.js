const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

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

app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
