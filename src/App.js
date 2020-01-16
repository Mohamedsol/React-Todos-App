import React, { Component } from 'react';
import TodoItems from './Components/TodoItems/TodoItems'
import AddItems from './Components/AddItems/AddItems'

class App extends Component  {
  state = {
    items : [
      {
        id:1,
        name: 'Hamza',
        age: 22
      },
      {
        id:2,
        name: 'Mohamed',
        age: 23
      },
      {
        id:3,
        name: 'Abdo',
        age: 24
      }

    ]
  } 
  render() {
    return (
      <div className="App">
        Todo list app
        <TodoItems items={this.state.items}/>
        <AddItems />
      </div>
    );
  }
}

export default App;
