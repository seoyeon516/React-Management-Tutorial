import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customers =[
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
]

class App extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birth Day</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => {
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
          </TableBody>
        </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
