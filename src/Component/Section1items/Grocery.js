import React from 'react'
import grocery1 from "./groceryimages/grocery1.png"
import grocery2 from "./groceryimages/grocery2.png"
import grocery3 from "./groceryimages/grocery3.png"

export default function Grocery() {
    return (
       <>
       <div style={{marginTop:"60px"}}>
       <img style={{height:"",width:"100%"}} src={grocery1} alt="" />
       <img style={{height:"100%",width:"100%"}} src={grocery2} alt="" />
       <img style={{height:"100%",width:"100%"}} src={grocery3} alt="" />


       </div>

       
        </>
    )
}
