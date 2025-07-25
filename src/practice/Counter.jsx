import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    let [count, setCount] = useState(0)
    function increment() {
        setCount(prev => prev+ 1)
    }
    function decremt() {
        setCount(prev => prev - 1)
    }

  return (
    <>
    <button onClick={increment}>Increment</button>

    <div>{count}</div>
    <button onClick={decremt}>Decrement</button>
    </>
    
  )
}
