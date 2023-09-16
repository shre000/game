import React from 'react'
import Footer from '../Home/Footer';

const Register = () => {
  return (
    <>
      <div className="container py-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <p className="nav-link bg-warning text-light bg-dark" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true">Register</p>
          </li>

        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
              <div className="text-center mb-3" />


              {/* <!-- Mobile number --> */}
              <div className="form-outline mb-2">
                <input type="text" id="registerMobilenumber" class="form-control" />
                <label className="form-label" for="registerMobilenumber">Mobile number</label>
              </div>

              {/* <!-- Verification Code --> */}
              <div class="form-outline mb-2">
                <input type="text" id="registerVerificationcode" class="form-control" />
                <label class="form-label" for="registerVerificationcode">Verification Code</label>
              </div>

              {/* <!-- Recommendation code --> */}
              <div class="form-outline mb-2">
                <input type="text" id="registerRecommendationcode" class="form-control" />
                <label class="form-label" for="registerRecommendationcode">Recommendation Code</label>
              </div>
           

              {/* <!-- Password input --> */}
              <div class="form-outline mb-2">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div class="form-outline mb-2">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
              </div>

              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-center mb-2">
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                  aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <center> <button type="submit" className="btn btn-dark  btn-block mb-5 mt-2 mx-5">Sign Up</button></center>
            </form>
          </div>
        </div>
      </div>
      <br />
     
      <div>
        <Footer />
      </div>
    </>

  )
}

export default Register;
