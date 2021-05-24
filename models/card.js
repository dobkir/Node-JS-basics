const path = require('path');
const fs = require('fs');

const pathToCard = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'card.json'
);

class Card {
  static async add(course) {
    const card = await Card.fetch();

    const idx = card.courses.findIndex(c => c.id === course.id);
    const candidate = card.courses[idx];

    if (candidate) {
      // the course is already there
      candidate.count++;
      card.courses[idx] = candidate;
    } else {
      // needed to add a course
      course.count = 1;
      card.courses.push(course);
    }

    card.price += +course.price;

    return new Promise((resolve, reject) => {
      fs.writeFile(
        pathToCard,
        JSON.stringify(card),
        err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  }

  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        pathToCard,
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        });
    });
  }
}

module.exports = Card;
