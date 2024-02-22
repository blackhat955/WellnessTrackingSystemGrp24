import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/register/register'
import Login from './pages/Login'
import Home from './pages/Home'
import axios from 'axios'
import Toaster from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:800'
axios.defaults.withCredentials= true

export default function App() {
 return (
    <div>
      <Register/>


    {/* <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} /> */}

    {/* <Routes>
      Hello
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes> */}
    </div>
  )
}
