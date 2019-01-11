import React, { PureComponent } from 'react';
import Form from './Components/Form';
import Index from './Components/Index';
import './App.css';

class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: 'Mani',
          lastName: 'Sandoval',
          age: 23,
          gender: true
        },
        {
          id: 2,
          name: 'Monse',
          lastName: 'Guzmán',
          age: 22,
          gender: false
        },
        {
          id: 3,
          name: 'Diego',
          lastName: 'Solorio',
          age: 22,
          gender: true
        },
        {
          id: 4,
          name: 'Paulina',
          lastName: 'Rodriguez',
          age: 22,
          gender: false
        }
      ]
    };
  };

  addPerson = (newPerson) => {    
    let lastElement = this.state.people[this.state.people.length - 1].id;
    newPerson.id = lastElement + 1;
    debugger;
    this.setState({
      people: [...this.state.people, newPerson]
    });    
  };

  render() {
    return (
      <div className="App">
        <Index></Index>
        <Form people={this.state.people} addPerson={this.addPerson}></Form>
      </div>
    );
  }
}

export default App;
