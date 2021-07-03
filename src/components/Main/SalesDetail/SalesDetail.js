import { faCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Pie } from "react-chartjs-2";
import "./SalesDetail.css";
import MapChart from "../MapChart/MapChart";

const SalesDetail = () => {
  return (
    <div>
      <div className="card-deck mt-5">
        <div
          className="card"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body d-flex">
            <h5 className="card-title">Top Selling Products</h5>

            <a className="ml-auto mr-2 sales-icon" href="#">
              <FontAwesomeIcon icon={faEllipsisH} />
            </a>
          </div>

          <div className="card-body pt-0">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Samsung Galaxy S8</td>
                  <td>$287</td>
                  <td>124</td>
                  <td>$38,525</td>
                </tr>
                <tr>
                  <td>Half Sleeve Shirt</td>
                  <td>$28</td>
                  <td>85</td>
                  <td>$21,884</td>
                </tr>
                <tr>
                  <td>Marco Shoes</td>
                  <td>$32</td>
                  <td>58</td>
                  <td>$17,457</td>
                </tr>
                <tr>
                  <td>15" Macbook Pro</td>
                  <td>$967</td>
                  <td>136</td>
                  <td>$15,345</td>
                </tr>
                <tr>
                  <td>Apple Iphone X</td>
                  <td>$985</td>
                  <td>24</td>
                  <td>$10,710</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="card"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body d-flex pb-0 ">
            <h5 className="card-title mb-0">Sales By Location</h5>
            <a className="ml-auto mr-2 sales-icon" href="#">
              <FontAwesomeIcon icon={faEllipsisH} />
            </a>
          </div>
          <hr />
          <div className="card-body">
            <MapChart></MapChart>
          </div>
          <div className="card-body pt-0">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Top Location</th>
                  <th scope="col">Order</th>
                  <th scope="col">Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Buenos Aires</td>
                  <td>397</td>
                  <td>$23,324</td>
                </tr>
                <tr>
                  <td>La Paz</td>
                  <td>378</td>
                  <td>$21,378</td>
                </tr>
                <tr>
                  <td>Brasilia</td>
                  <td>220</td>
                  <td>$18,298</td>
                </tr>
                <tr>
                  <td>Georgetown</td>
                  <td>140</td>
                  <td>$12,689</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="card"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body d-flex pb-0 mb-0">
            <h5 className="card-title mr-2">Revenue By Device</h5>
            <div className="ml-auto">
              <a className="sales-menu" href="#">
                Today
              </a>
              <a className=" sales-menu ml-3" href="#">
                Week
              </a>
              <a className=" sales-menu ml-3" href="#">
                Month
              </a>
            </div>
          </div>
          <hr />
          <div className="card-body" style={{ height: "200px" }}>
            <Pie
              data={{
                datasets: [
                  {
                    label: "# of votes",
                    data: [25, 45, 30],
                    backgroundColor: ["#FA8B0C", "#20C997", "#5F63F2"],
                    borderColor: ["#FA8B0C", "#20C997", "#5F63F2"],
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,

                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
          <div className="card-body">
            <div className="d-flex">
              <div>
                <p className="card-text">
                  <span className="pr-1">
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "10px", color: "#20C997" }}
                      icon={faCircle}
                    />
                  </span>
                  <small className="text-muted">Desktop</small>
                </p>
                <p className="card-text">
                  <span className="pr-1">
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "10px", color: "#5F63F2" }}
                      icon={faCircle}
                    />
                  </span>
                  <small className="text-muted">Mobile</small>
                </p>
                <p className="card-text">
                  <span className="pr-1">
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "10px", color: "#FA8B0C" }}
                      icon={faCircle}
                    />
                  </span>
                  <small className="text-muted">Tablets</small>
                </p>
              </div>
              <div style={{ paddingLeft: "80px" }}>
                <p className="card-text">
                  <b className="text-muted">$5,870</b>
                </p>
                <p className="card-text">
                  <b className="text-muted">$4,483</b>
                </p>
                <p className="card-text">
                  <b className="text-muted">$2,430</b>
                </p>
              </div>
              <div style={{ paddingLeft: "80px" }}>
                <p className="card-text">
                  <small className="text-muted">45%</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">30%</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">25%</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDetail;
