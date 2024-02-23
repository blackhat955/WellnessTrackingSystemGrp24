import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'; 

axios.defaults.baseURL = 'http://localhost:8100'
axios.defaults.withCredentials= true

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello in App.jsx</h1>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
