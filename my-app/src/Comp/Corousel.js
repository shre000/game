import React from 'react'
import c1 from '../images/c1.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.png'
import '../Comp-style/corousel.css'

const Corousel = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="..." />
          </div>

        </div>
      </div>


    </>
  )
}

export default Corousel;
