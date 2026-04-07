import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContext from './contexts/CounterContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  // providing counter context to root component
  <CounterContext>
    <App/>
  </CounterContext>
)
