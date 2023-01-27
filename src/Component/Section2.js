import React from 'react'
import img1 from "../1.png"
import img2 from "../2.png"
import img3 from "../3.png"
// import {Link} from "react-router-dom"



export default function Section2() {
    return (
       <>
 <div style={{padding:"10px",paddingTop:"20px",paddingBottom:"0"}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height:"300px",width:"100%"}} src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"300px",width:"100%"}} src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:"300px",width:"100%"}} src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>  
        </>
    )
}
