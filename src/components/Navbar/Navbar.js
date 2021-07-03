import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestionCircle,
  faFlagUsa,
  faEnvelope,
  faBell,
  faCog,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../Sidebar/Sidebar.css";
import logo from "../../images/Logo@1X.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars pb-2">
          <img src={logo} alt="" />
        </Link>
        <div
          to="#"
          className="menu-bars  d-flex"
          style={{ marginLeft: "100px" }}
        >
          <label htmlFor="search" className=" pt-1">
            <FontAwesomeIcon style={{ color: "#5f63f2" }} icon={faSearch} />
          </label>
          <input
            type="text"
            className="form-control d-none d-lg-block d-md-block"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search...."
            style={{ border: "0px" }}
            name="search"
          />
        </div>

        <div className="ml-auto ">
          <Link to="#" className=" text-decoration-none text-secondary">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="#" className=" text-decoration-none text-secondary pl-3">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Link to="#" className=" text-decoration-none text-secondary pl-3">
            <FontAwesomeIcon icon={faCog} />
          </Link>
          <Link to="#" className=" text-decoration-none text-secondary pl-3">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Link>
          <Link to="#" className=" text-decoration-none text-secondary pl-3">
            <FontAwesomeIcon icon={faFlagUsa} />
          </Link>
          <Link to="#" className=" text-decoration-none text-secondary pl-3">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
