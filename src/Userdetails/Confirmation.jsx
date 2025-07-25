import React from 'react'

export const Confirmation = ({username,password}) => {
  return (
    <>
        <h2>Confirmation</h2>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
    </>
  )
}
