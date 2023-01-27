import React from 'react'
import "./App.css"
// import Footer from './Component/Footer'
// import Navbar from './Component/Navbar'
// import Section1 from './Component/Section1'
// import Section2 from './Component/Section2'
// import Sectoin3 from './Component/Sectoin3'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Grocery from './Component/Section1items/Grocery'
import Mobile from './Component/Section1items/Mobile'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Fashion from './Component/Section1items/Fashion'

export default function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />}/> */}

          <Route exact path="/grocery" element={<Grocery />} />
          <Route exact path="/mobile" element={<Mobile />} />
          <Route exact path="/fashion" element={<Fashion />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}
