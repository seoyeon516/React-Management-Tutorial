import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
  'id':1,
  'image':'https://placeimg.com/200/200/1',
  'name':'nam seo yeon',
  'birthday': '91.05.16',
  'gender': 'female',
  'job': 'free-lancer'
},
{
  'id':2,
  'image':'https://placeimg.com/200/200/2',
  'name':'park dai sung',
  'birthday': '74.02.17',
  'gender': 'male',
  'job': 'japanese teacher'
},
{
  'id':3,
  'image':'https://placeimg.com/200/200/3',
  'name':'kano',
  'birthday': '03.05.01',
  'gender': 'male',
  'job': 'old cat'
}
]

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
