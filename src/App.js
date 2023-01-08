import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoBtn } from "./CreateTodoBtn";
// import './App.css';

const todos = [
  { text: 'Avanzar ruta de Javascript a profundidad', completed: false },
  { text: 'Tomar aguar', completed: false },
  { text: 'Sacar la licencia de conducir', completed: false },
  { text: 'Avanzar ruta de React', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}  
      </TodoList>

      <CreateTodoBtn />
    </React.Fragment>
  ); 
}

export default App;
