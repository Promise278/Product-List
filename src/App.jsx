import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
