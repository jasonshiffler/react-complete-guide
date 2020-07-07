import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'; //Need
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '12345', name: 'Max', age: 28 },
      { id: '12346', name: 'Bobby', age: 38 },
      { id: '12347', name: 'Jason', age: 43 },
      { id: '12348', name: 'Jacki', age: 42 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Make a copy of the array before passing the modified one back in.
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '3px',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    //Need radium for the hover feature

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        {' '}
        {/*Need this for Radium to work with Media Queries*/}
        <div className='App'>
          <h1>I'm a React App</h1>
          <p className={classes.join(' ')}>This is Working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); //component wrapped in a component
