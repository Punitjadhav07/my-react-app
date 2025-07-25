import React, { useState } from 'react'

export const Adduser = ({setUser}) => {
   
    // function adduser() {
    //     Setuser(document.querySelector('input').value)
        
    // }

  return (
    <div>
        <h3>Add User</h3>
        <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Enter username" />
        {/* <button onClick={adduser}>Add User</button> */}
    </div>
  )
}
