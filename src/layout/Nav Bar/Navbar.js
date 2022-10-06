import { React } from 'react';
import logo from './images/logo.svg'
import { Link } from "react-router-dom";
function Navbar(props){
    return(
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-gray-800  animate__animated animate__bounce animate__slideInDown">
              <div className="container">
                <Link className="navbar-brand " to="/home">
                    <img src={logo} className="w-50  " alt='...' />
                  </Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                      <Link className={props.home}  to="/home">Home</Link>
                    </li>
                    <li className="nav-item ">
                      <Link className={props.features} to="/features">Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={props.tems} to="/tems">Tems</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={props.signIn} to="/sign-in">Sign in</Link>
                    </li>
                  </ul>
                </div>
              </div>
</nav>
        </>
    )
}
export default Navbar;