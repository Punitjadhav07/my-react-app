import React from 'react'

export const SqrCub = ({children}) => {
     let num = 5;
  return (
    <div>
        Square of {num} is {num*num} 
        <h1>cube of {num} is {num*num*num}</h1>
        Square of 5 is 25
        <h1>Cube of 5 is 125</h1>
        Square of {children} is {children*children}
        <h1>Cube of {children} is {children*children*children}</h1>
        
    </div>
  )
}
