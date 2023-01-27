import React from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Home() {
    return (
      <> 
      <Section1 />
      <div style={{ backgroundColor: "#f1f3f6" }}>
        <Section2 />
        <Section3 />
      </div>
      <div style={{ border: "" }}>

      </div>
      </>
    )
}
