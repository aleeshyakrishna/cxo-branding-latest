import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default AllRoutes
