import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import "./App.css"
function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App