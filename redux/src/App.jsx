import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import { Provider } from 'react-redux'
import store from '../redux/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Counter />
    </Provider>      
    </>
  )
}

export default App
