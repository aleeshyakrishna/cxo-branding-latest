import React,{useEffect} from 'react'
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <div>
        <Navbar/>
      <WhoWeAre/>
      <Footer/>
    </div>
  )
}

export default AboutUs
