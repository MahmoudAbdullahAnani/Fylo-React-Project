import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className=" pt-40  bg-gray-900">
      <div className="myLogo  container">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-content gap-4 pt-3 align-items-center text-center-xs text-left-md    justify-content-around d-flex flex-wrap text-white container">
        <div className="loction d-flex col-12 col-md-6 gap-3 col-lg-4">
          <i className="fa-solid fa-location-dot"></i>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore et magna aliqua
          </p>
        </div>
        <ul className="list-group col-12 col-md-6 col-lg-2">
          <li>
            <i className="fa-solid fa-phone-volume"></i>
            <a
              className="ms-2 btn text-white hovre:text-lime-600"
              href="tel:201028876202"
            >
              +1-543-123-4567
            </a>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <a
              className="ms-2 btn text-white hovre:text-lime-600"
              href="mailto: mahmoud18957321@gamil.com"
            >
              example@fylo.com
            </a>
          </li>
        </ul>
        <ul className="list-group col-12 col-md-6 col-lg-2">
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Press
            </Link>
          </li>
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Blog
            </Link>
          </li>
        </ul>
        <ul className="list-group col-12 col-md-6 col-lg-2">
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Cantact Us
            </Link>
          </li>
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              className="btn border-none text-white hovre:text-lime-600"
              to="/"
            >
              Privacy
            </Link>
          </li>
        </ul>
        <ul className="list-group d-flex gap-2  flex-row list-none ">
          <li className="p-0 text-center w-30 col   p-2 hovre:text-lime-600 text-lg rounded-circle text-whier  ">
            <a href="/">
              <i className="text-white fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="p-0 text-center w-30 col  p-2 hovre:text-lime-600 text-lg rounded-circle text-whier">
            <a href="/">
              <i className=" text-white fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className=" p-0 text-center w-30 col  p-2 text-lg rounded-circle text-whier">
            <a className="text-white" href="/">
              <i className="  fa-brands fa-instagram hovre:text-lime-600 text-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
