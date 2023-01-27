import React from 'react'
import {Link} from "react-router-dom"

import "../App.css"

export default function Section1() {
    return (
        <> 
        
        <div style={{borderBottom:"1px solid lightgray",marginTop:"100px"}}>
            <ul className="section1ul">
                <li style={{}}><Link to="/grocery"><img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" /><p>Grocery</p></Link></li>
                <li><Link to="/mobile"><img src="https://m.media-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg" alt="" /><p>Mobiles</p></Link></li>
                <li><Link to="/fashion"><img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" /><p>Fashion</p></Link></li>
                <li><Link to=""><img src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=" alt="" /><p>Electronics</p></Link></li>
                <li><Link to=""><img src="https://rukminim1.flixcart.com/flap/128/128/image/Linkb7e2b022a4587dd.jpg?q=100" alt="" /><p>Home</p></Link></li>
                <li><Link to=""><img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" /><p>Appliances</p></Link></li>
                <li><Link to=""><img src="https://www.shutterstock.com/image-photo/Linkirplane-isolated-on-white-background-260nw-584015857.jpg" alt="" /><p>Travel</p></Link></li>
                <li><Link to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQ_aEwmnJYufCIRySMELzndtd8z6tYaQdSpBio4TEiidpBuGZsr_UVR5lu0KNgLRaRQs&usqp=CAU" alt="" /><p>Top offers</p></Link></li>
                <li style={{display:"flex",flexDirection:"column",alignItems:"center"}}><Link to=""><img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" /></Link><Link to="">Beauty,Toys & more</Link></li>
                <li><Link to=""><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" /><p>Two wheelers</p></Link></li>
            </ul>
        </div>
        
        
        
        
        </>
    )
}
