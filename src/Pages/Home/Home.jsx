import React from "react";
import Navbar from "./../../Components/Navbar/Navbar.jsx";
import BecomeNav from "../../Components/BecomeNav/BecomeNav.jsx";
import Header from "../../Components/Header/Header.jsx";
import Content from "../../Components/Contents/Content.jsx";
import Services from "../../Components/Services/Services.jsx";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre.jsx";
import Testimonals from "../../Components/Testimonals/Testimonals.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
function Home() {
  return (
    <>
      <BecomeNav />
      <Navbar />
      <Header />

      <Content />
      <Services />
      <WhoWeAre />

      <Testimonals />
      <Footer />
    </>
  );
}

export default Home;
