import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDownload,
  faPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import WeeklyCalculation from "../WeeklyCalculation/WeeklyCalculation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Revenue from "../Revenue/Revenue";
import "react-datepicker/dist/react-datepicker.css";
import SalesDetail from "../SalesDetail/SalesDetail";
import Footer from "../Footer/Footer";

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="row">
        <div className="col-md-2 col-sm-2 col-2">
          <Sidebar></Sidebar>
        </div>
        <div
          className="col-md-10 col-sm-10 col-10"
          style={{ backgroundColor: "#F4F5F7" }}
        >
          <div className="d-flex pt-3 ">
            <h4 className="pr-2">Ecommerce Dashboard</h4>

            <div className="ml-auto ">
              <label htmlFor="date" className="pr-2 pt-1">
                <FontAwesomeIcon
                  style={{ color: "#5f63f2" }}
                  icon={faCalendar}
                />
              </label>
              <DatePicker
                className="mb-5"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date"
              />
              <button className="btn btn-light ml-2">
                {" "}
                <span className="pr-1">
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ color: "#5f63f2" }}
                  />
                </span>
                Export
              </button>
              <button className="btn btn-light ml-2">
                {" "}
                <span className="pr-1">
                  <FontAwesomeIcon
                    icon={faShare}
                    style={{ color: "#5f63f2" }}
                  />
                </span>
                Share
              </button>
              <button
                className="btn ml-2 mb-2"
                style={{ backgroundColor: "#5f63f2", color: "white" }}
              >
                {" "}
                <span className="pr-1">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Add New
              </button>
            </div>
          </div>
          <WeeklyCalculation></WeeklyCalculation>
          <Revenue></Revenue>
          <SalesDetail></SalesDetail>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
