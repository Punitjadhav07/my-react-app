import React from 'react'
import '../css/input.css'; 
export const Input = () => {
  return (
    <div className='input-container'>
        <input type="text" placeholder="Enter Your task here" />
        <button>Add Task</button>
    </div>
  )
}
