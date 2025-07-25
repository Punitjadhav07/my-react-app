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



function App() {
  // const [user, setUser] = useState('')
  // const [username, setUsername] = useState('')

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (username, password) => {
  setUser(username);
  setPassword(password);
  }

  return (
    <>
      {/* <div>
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Enter text here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Question1 text={"hello"} />
      {/* <UserCard un={username} /> */}
      {/* <Counter />
      <Adduser setUser={setUser} />
      <Displayuser user={user}/> */} 
     <Login onLogin={handleLogin} />
      <Confirmation username={user} password={password} />
    </>
  )
}

export default App