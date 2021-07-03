import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faEnvelope,
  faAngleRight,
  faCommentAlt,
  faShoppingCart,
  faLayerGroup,
  faUser,
  faPager,
  faIcons,
  faChartBar,
  faTable,
  faMap,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div style={{ marginLeft: "-10px" }}>
        <Link to="/" className="menu-bars m-0 text-secondary">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu" : "nav-menu active"}>
        <ul className="nav-menu-items ">
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faHome} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Dashboard
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Email
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faCommentAlt} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Chat
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                eCommerce
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>

          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faLayerGroup} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Layouts
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faUser} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary ">
                Profile
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex nav-text items-center pb-4 text-secondary"
            >
              <FontAwesomeIcon icon={faPager} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary ">
                Pages
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <span style={{ fontSize: "12px" }}>Components</span>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faLayerGroup} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                UI Elements
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faIcons} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Icons
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faChartBar} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Charts
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faTable} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Table
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faAlignRight} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Forms
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex nav-text items-center text-secondary">
              <FontAwesomeIcon icon={faMap} />
              <span className="pl-1 d-none d-sm-none d-md-block text-secondary">
                Maps
              </span>
              <div className="icon ml-auto text-secondary">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
