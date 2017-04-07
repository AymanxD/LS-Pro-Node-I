const express = require('express');
const app = express();

app.listen(5000, () => {
  console.log('app is listening to me!');
})

app.get('/', (req, res) => {
  res.send('Hello World')
});

const myName = 'Ayman';
app.get('/name', (req, res) => {
  res.send(myName);
})

const friends = ['Rimpi','Vidhita','Bandna'];
app.get('/friends', (req, res) => {
  res.send(friends);
}); 

const favoritefilm = {
  name: 'Usual Suspects',
  genre: 'crime',
  why: 'thriller'
};

app.get('/favorite-film', (req, res) => {
  res.send(favoritefilm);
});
