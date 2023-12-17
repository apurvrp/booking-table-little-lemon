import React from "react";
import small_logo from "../images/small_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={small_logo} alt="footer-logo" />
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Menu</Link>
            </li>
            <li>
              <Link to={"/"}>Reservations</Link>
            </li>
            <li>
              <Link to={"/"}>Order Online</Link>
            </li>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <Link to={"/"}>Facebook</Link>
            </li>
            <li>
              <Link to={"/"}>Instagram</Link>
            </li>
            <li>
              <Link to={"/"}>Twitter</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
