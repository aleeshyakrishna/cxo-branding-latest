import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import ContactUs from '../Pages/ContactUs/ContactUs.jsx';
import ResumeWriting from '../Pages/ResumeWriting/ResumeWriting.jsx';
import JobSearchAdvice from '../Pages/JobSearchAdv/JobSearchAdv.jsx';
import PersonalBranding from '../Pages/PersonalBrandingSolutions/PersonalBranding.jsx';
import SocialProfile from '../Pages/SocialProfileManagement/SocialProfile.jsx';
import Signup from '../Pages/Signup/Signup.jsx';
import Login from '../Pages/Login/Login.jsx';

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
            <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Routes>
          <Route path='/services/resume' element={<ResumeWriting/>} />
        </Routes>
        <Routes>
          <Route path='/services/jobsearchAdvice' element={<JobSearchAdvice/>} />
        </Routes>
        <Routes>
          <Route path='/services/personalBranding' element={<PersonalBranding/>} />
        </Routes>
        <Routes>
          <Route path='/services/socialmediaManagement' element={<SocialProfile/>} />
        </Routes>
        <Routes>
          <Route path='/user/register' element={<Signup/>} />
        </Routes>
        <Routes>
          <Route path='/user/login' element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default AllRoutes
