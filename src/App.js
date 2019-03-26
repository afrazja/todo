import React, { Component } from 'react';
import {BrowserRouter as Router,Route,IndexRoute, hashHistory} from 'react-router-dom';
import Todos from './components/todose';
import Header from './components/header';
import Adtodo from './components/adtodo';
import'./App.css'
import About from './components/about';
import axios from 'axios'


class App extends Component {
  markComplete=(id)=>{
   this.setState({todo:this.state.todos.map(todo=>{
     if(todo.id===id){
       todo.completed=!todo.completed
     }
     return todo;
   })

   });
  }
  addTodo=(title)=>{
 axios.post('https://jsonplaceholder.typicode.com/todos',{
   title,
   completed:false})
 .then(res=> this.setState({
      todos:[...this.state.todos,res.data]
 })
    );
   
  }
  deleteItem=(id)=>{
    axios.delete('https://jsonplaceholder.typicode.com/todos/$(id)')
 .then(res=> this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]
     
        }));
    
  }
  state={
    
    todos:[
    
    ]
  }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res=>this.setState({todos:res.data}))
    }

  
  render() {
    console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
      <div className="container">
      <Header/>
      <Route path="/" render={props=>(
        <React.Fragment>
         <Adtodo addTodo={this.addTodo}/>
       <Todos todos={this.state.todos} 
       markComplete={this.markComplete} deleteItem={this.deleteItem}/>
        </React.Fragment>
        )}
        />
         <Route path="/about" component={About} />
     
       </div>
      
       </div>
       </Router>
    );
  }
}

export default App;
