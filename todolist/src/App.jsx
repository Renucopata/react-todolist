import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos] = useState([])
const [ todoValue, setTodoValue] = useState('')

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos:
    newList
  }))
}

function handleAddTodos(newtodo){
  const newTodoList = [...todos, newtodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodo (index) {
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex != index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleUpdateTodo (index) {
  const newValue = todos[index]
  setTodoValue(newValue)
  handleDeleteTodo(index)
  persistData(newTodoList)

}

useEffect(()=> {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('tods')
  if(!localTodos){
    return
  }

  console.log(localTodos)
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
}, [])
  return (
    <>
        <TodoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
        <TodoList  handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
