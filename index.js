const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cardRoutes = require('./routes/card');

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
app.use(express.static(path.join(__dirname, 'public')));
// apply new middlewear
app.use(express.urlencoded({ extended: true }));
// routes registration
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/card', cardRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url = `mongodb+srv://pavel:cyJ0qNpKr3T9cX3c@cluster0.toumu.mongodb.net/shop`;
    await mongoose.connect(url, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    });
  } catch (e) {
    console.log(e);
  }
}

start();
