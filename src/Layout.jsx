import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Dev_Dashboard from './Components/Dev_Dashboard/Dev_Dashboard'
import StarterPage from './Components/Starter_Page/StarterPage'
import Signup from './Components/SignupComponent/Signup';
import Login from './Components/LoginComponent/Login';
import Select from './Components/Select'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<StarterPage />} />
       <Route path="/Signup" element={<Signup />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Select" element={<Select />} />

       
       </Routes>
    </BrowserRouter>
  )
}

export default Layout