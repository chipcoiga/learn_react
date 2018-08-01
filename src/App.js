import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Loc', age: 30}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log('Clicked!');
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 1228},
  //       {name: 'Locqqqqq', age: 310}
  //     ]
  //   });
  // }

  deletePersonHandle = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changedNameHandler = (event, id) => {
    const pesron = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    this.setState({
      persons: [
        {name: event.target.value, age: 1228},
        {name: 'Locqqqqq', age: 310}
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandle(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.changedNameHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classese = [];

    if(this.state.persons.length <=2){
      classese.push('red');
    }

    if(this.state.persons.length <= 1) {
      classese.push('bold');
    }
    return (
      <div className="App">
        <h1 className={classese}>Hi, I am loc </h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>  
          {persons}    
        </div>
    );
  }
}

export default App;
