import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import Dev_Dashboard from './Components/Dev_Dashboard/Dev_Dashboard'
import StarterPage from './Components/Starter_Page/StarterPage'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Select from './Components/UserSelection/Select'
import DeveloperForm from './Components/Dev_form/DeveloperForm';
import EntrepreneurForm from "./Components/Entrepreneur/EntrepreneurForm";
import InvestorForm from './Components/InvestorForm/InvestorForm';
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => {
  return (
    // <Outlet />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/developer" element={<DeveloperForm />} />
        <Route path="/entrepreneur" element={<EntrepreneurForm />} />
       <Route path="/investor" element={<InvestorForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Layout