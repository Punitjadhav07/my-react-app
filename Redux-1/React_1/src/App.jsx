import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './Components/Input'
import { Header } from './Components/Header'
import { Display } from './Components/Display'

function App() {


  return (
    <>
      <div className="container">
        <div className="header">
          <Header/>
        </div>
        <div className="infutFeild">
          <Input/>
        </div>
        <div className="card">
          <Display/>
        </div>
      </div>
    </>
  )
}

export default App
