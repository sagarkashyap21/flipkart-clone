import React from 'react'
import {Link} from "react-router-dom"


export default function Navbar() {
    return (
        <>

            <div style={{ border: "",position:"fixed",top:"0",width:"100vw",zIndex:"1"}}>
<div style={{border: "",alignItems:"center",height:"60px",display:"flex",backgroundColor:"#2874f0" }}>
    <ul style={{border: "",marginTop:"10px",marginLeft:"150px",listStyle:"none",display:"flex",alignItems:"center"}}>
        <li><img style={{height:"40px",width:"60px"}} src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png" alt="" /></li>
        <li style={{border:"",marginLeft:"20px",height:"35px",backgroundColor:"white",display:"flex",alignItems:"center"}}><input style={{width:"400px",outline:"none",border:"0"}} type="search" placeholder="Search for products,brands and more"  /><i style={{color:"blue",marginLeft:"40px",marginRight:"10px"}} class="fa fa-solid fa-magnifying-glass"></i></li>
        <li style={{backgroundColor:"white",marginLeft:"20px",height:"35px",width:"100px",display:"flex",justifyContent:"center"}}><button style={{color:"blue",backgroundColor:"white",fontSize:"20px",border:"0"}}>Login</button></li>
    </ul>
    <ul style={{border:"",marginTop:"5px",width:"370px",display:"flex",listStyle:"none",justifyContent:"space-between"}}>
        <li><Link to="" style={{color:"white",fontSize:"20px",fontWeight:"600",textDecoration:"none"}}>Become a Seller</Link></li>
        <li><Link to="" style={{color:"white",fontSize:"20px",fontWeight:"600",textDecoration:"none"}}>More</Link></li>
        <li><Link to="" style={{color:"white",fontSize:"20px",fontWeight:"600",textDecoration:"none"}}><i style={{marginRight:"10px"}} class="fa fa-solid fa-cart-shopping"></i>Cart</Link></li>
    </ul>
</div>

            </div>


        </>
    )
}
