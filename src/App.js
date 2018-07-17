import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Loc', age: 30}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Clicked!');
    this.setState({
      persons: [
        {name: newName, age: 1228},
        {name: 'Locqqqqq', age: 310}
      ]
    });
  }

  changedNameHandler = (event) => {
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person click={() => this.switchNameHandler('hahaahha')} name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}/>
          <Person change={this.changedNameHandler} name="Loc" age="38" />
          <Person name="Le" age="12" >My hobies: gaming </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am loc </h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>  
          {persons}    
        </div>
    );
  }
}

export default App;
