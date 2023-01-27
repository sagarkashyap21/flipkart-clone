import React from 'react'
import mobile1 from "./mobileimages/mobile1.png"
import mobile2 from "./mobileimages/mobile2.png"
import mobile3 from "./mobileimages/mobile3.png"
// import Navbar from '../Navbar'

export default function Mobile() {
    return (
        <>
        {/* <Navbar /> */}
        <div>
            <img style={{height:"",width:"100%"}} src={mobile1} alt="" />
            <img style={{height:"",width:"100%"}} src={mobile2} alt="" />
            <img style={{height:"",width:"100%"}} src={mobile3} alt="" />
        </div>
        
         </>
    )
}
