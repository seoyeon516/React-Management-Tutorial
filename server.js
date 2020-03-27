const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req, res) => {
    res.send([
        {
        'id':1,
        'image':'https://placeimg.com/150/150/1',
        'name':'nam seo yeon',
        'birthday': '91.05.16',
        'gender': 'female',
        'job': 'free-lancer'
      },
      {
        'id':2,
        'image':'https://placeimg.com/150/150/2',
        'name':'park dai sung',
        'birthday': '74.02.17',
        'gender': 'male',
        'job': 'japanese teacher'
      },
      {
        'id':3,
        'image':'https://placeimg.com/150/150/3',
        'name':'kano',
        'birthday': '03.05.01',
        'gender': 'male',
        'job': 'old cat'
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));