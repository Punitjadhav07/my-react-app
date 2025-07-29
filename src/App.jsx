import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Question1 } from './practice/Question1'
import { UserCard } from './practice/UserCard'
import { Counter } from './practice/Counter'
import { Adduser } from './practice/Adduser'
import { Displayuser } from './practice/Displayuser'
import { Login } from './Userdetails/login'
import { Confirmation } from './Userdetails/confirmation'
import { SqrCub } from './practice/SqrCub'
import { A } from './practice/A'
import { UserProvider } from './practice/UserProvider'



function App() {
  return (
    <UserProvider>
      <A />
    </UserProvider>
  );
}


export default App