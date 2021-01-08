import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" style={{ width: "100vw" }}>
          <Link to="/">
            <Navbar.Brand className="ml-5">
              <img src={logo} width="60" height="50" alt="logo" />
            </Navbar.Brand>
            <Navbar.Text className="text-white">
              <h3>Student Portal</h3>
            </Navbar.Text>
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
