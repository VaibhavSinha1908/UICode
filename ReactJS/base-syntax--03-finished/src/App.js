import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '12sd', name: 'Max', age: 28 },
      { id: '213w12', name: 'Manu', age: 29 },
      { id: 'dsf323', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = [...this.state.person[personIndex]]; //create a copy of the person object using the spread operator
    person.name = event.target.value;

    const persons = [...this.state.persons];   //create a copy of persons array using the spread operator.

    persons[personIndex] = person;


    this.setState({ persons: persons }); //setting the original version of persons with newer version of persons object.
  }

  deleteEventHandler = (personIndex) => {
    //const persons = this.state.persons;// not a good way as we get a pointer to the original persons object. Accidently changing this could lead to unstable apps.
    // const persons = this.state.persons.slice(); //old javascript way to copy the array to a new brand new array.
    const persons = [...this.state.persons]; //Latest Es6 way to spread an array into it's elements and copy it in the new array, 'persons'
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  render() {     //everything under render method gets executed everytime react updates the DOM.
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {   //Dynamic List Syntax
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deleteEventHandler(index)} />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';


    }


    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length === 1) {
      classes.push('bold');
    }

    if (this.state.persons.length === 0) {
      classes.push('bolder');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button

          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}


      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
