import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import ContactUs from '../Pages/ContactUs/ContactUs.jsx';
const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
            <Route path='/contact' element={<ContactUs/>} />
        </Routes>
    </Router>
  )
}

export default AllRoutes
