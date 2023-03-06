import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import Meme from './meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Meme / >
    </div>
  )
}

export default App
