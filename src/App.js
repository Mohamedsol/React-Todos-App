import React, { Component } from 'react';
import TodoItems from './Components/TodoItems/TodoItems'
import AddItems from './Components/AddItems/AddItems'
import './App.css'

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

  deleteItem = (id) => {
    let items = this.state.items.filter( item => {
      return item.id !== id
    })
    this.setState({items: items})
  }

  addItem = (item) => {
    item.id= Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items: items})
  }

  render() {

    return (
      <div className="App container">
        <h1 className= "text-center">My Todo List </h1>
        <TodoItems items={this.state.items} deleteItem= {this.deleteItem} />
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
