import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './Components/Form';
import Index from './Components/Index';
import Header from './Components/Header';
import './App.css';

class App extends PureComponent {
  constructor(){
    super();
    //Aqui nada más declaro un arreglo de objetos para guardar información de People
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

  //Adds person to the array

  //Esta función es la que modifica el state para que se puedan añadir más persons al array. Y está recibiendo como parámetro un objeto.
  addPerson = (newPerson) => {    
    let lastElement = 0;
    if(this.state.people.length !== 0){
      lastElement = this.state.people[this.state.people.length - 1].id;    
    }    

    const person = {
      id: lastElement + 1,
      name: newPerson.name,
      lastName: newPerson.lastName,
      age: newPerson.age,
      gender: newPerson.gender
    }
    this.setState({
      people: [...this.state.people, person]
    });        
  };

  //Removes person from the array
  delPerson = (id) => {
    this.setState({ people: [...this.state.people.filter(person => person.id !== id)] });
  }

  render() {
    return (
      //Allows me to use the router class to be able to change between pages in the app      
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Form people={this.state.people} addPerson={this.addPerson} delPerson={this.delPerson}></Form>
              </React.Fragment>    
            )}/>
            <Route path="/index" component={Index}/>                        
          </div>
        </div>
      </Router>
    );
  }
}

export default App;