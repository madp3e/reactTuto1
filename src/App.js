import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Todos from "./components/Todos"
import AddTodo from "./components/Addtodo"
import About from "./components/pages/About"
import Header from "./components/layout/Header"


class App extends React.Component {
  state = {
    todos:[]
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10"
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      todos:data
    }))
  }

  markComplete = (id) => {
    console.log(id)
    this.setState({
      todos:this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    console.log(id)
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    fetch(url, {
      method:"DELETE",
      body:JSON.stringify({"id":id})
    })
    .then(response => response.json())
    .then(data => {
      console.log(`${data} deleted`)
      this.setState({
        todos:[...this.state.todos.filter((todo) => todo.id != id)]
      })
    })
    
  }

  addTodo = (title) => {
    console.log(title)
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({"title":title, "completed":true})
    })
    .then(response => response.json())
    .then(data => this.setState({
      todos:[...this.state.todos, data]
    }))
  } 

  render() { 
    return ( 
      <Router>
        <div className="App">
          <div className="container">
            <Header/>

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>

                <Todos todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>)}/>
            
            <Route path="/about" component={About}/>
            
          </div>
        </div>
      </Router>

     );
  }
}
 
export default App;
