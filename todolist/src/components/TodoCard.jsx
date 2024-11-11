import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleUpdateTodo} = props
  return (
      <li className='todoItem'>
        {children}

        <div className='actionsContainer'></div>
        <button onClick={() =>{
          handleUpdateTodo(index)
        }}>
        <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button  onClick={() => {
          handleDeleteTodo(index)
        }}>

        <i className="fa-regular fa-trash-can"></i>
        </button>
          
          
      </li>
            )      
  
}
