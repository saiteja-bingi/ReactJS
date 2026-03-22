import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateChangeDemo from './components/StateChangeDemo'
import ApiDemo from './components/ApiDemo'
function App() {
  return (
    <div>
      {/* <StateChangeDemo>

      </StateChangeDemo> */}
      <ApiDemo></ApiDemo>
    </div>
  )
}

export default App
