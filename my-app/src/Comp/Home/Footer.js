import React from 'react'
import '../../Comp-style/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="conatiner-fluid fixed-bottom bg-light pt-2">
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <Link to={'/'}> <i className="fa-solid fa-house fa-bounce"><br />Home</i></Link>
              {/* <p>Home</p> */}
            </div>
            <div className="col-4  text-center ">
              <Link to={'/search'}> <i className="fa-solid fa-search fa-bounce"><br />Search</i></Link>
              {/* <p>Search</p> */}
            </div>
            <div className="col-4  text-center">
              <i className="fa-regular fa-address-book fa-bounce"><br />My</i>
              {/* <p>My</p> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
