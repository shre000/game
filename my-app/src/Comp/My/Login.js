import React from 'react'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom';
import '../../Comp-style/login.css'

const Login = () => {
    return (
        <>
            <div className="container py-4">
                {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <p className="nav-link bg-warning text-light bg-dark" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</p>
                </li>
                
            </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <input type="phone" id="loginPhone" className="form-control" />
                            <label className="form-label" for="loginPhone">Phone number</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>

                        {/* <!-- 2 column grid layout --> */}
                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                {/* <!-- Simple link --> */}
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        {/* <!-- Submit button --> */}
                       <center> <button type="submit" className="btn btn-dark  btn-block mb-4 mx-5">Sign in</button></center>

                        {/* <!-- Register buttons --> */}
                        <div className="text-center">
                            <p>Not a member?&nbsp;<Link to={'/register'}>Register</Link></p>
                        </div>
                    </form>
                </div>
               
                
            </div>
            {/* <!-- Pills content --> */}
            
       
            </div>

            <div>
            <Footer/>
            </div>
        </>
    )
}

export default Login;
