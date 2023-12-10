import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
