import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Task from './components/TaskForm.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
< Task />
  </StrictMode>,
)
