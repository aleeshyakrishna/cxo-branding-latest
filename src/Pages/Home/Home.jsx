import React from 'react'
import Navbar from './../../Components/Navbar/Navbar.jsx'
import BecomeNav from '../../Components/BecomeNav/BecomeNav.jsx'
import Header from '../../Components/Header/Header.jsx'
import Content from '../../Components/Contents/Content.jsx'
import Services from '../../Components/Services/Services.jsx'
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
function Home() {
  return (
    <>
              <Navbar/>
              <BecomeNav/>
              <Header/>
              {/* <br/> */}
              <Content/>
              <Services/>
              <WhoWeAre/>
              <Footer/>
    </>

    
  )
}

export default Home
