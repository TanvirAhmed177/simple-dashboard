import React from "react";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import MapChart from "../MapChart/MapChart";

const Revenue = () => {
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
          <div className=" d-flex pt-4  px-3 ">
            <h5 className="card-title ">Total Revenue</h5>
            <a className="ml-auto mr-2 sales-icon" href="#">
              <FontAwesomeIcon icon={faEllipsisH} />
            </a>
          </div>
          <hr />
          <div className="card-body pt-0">
            <div className="d-flex">
              <div>
                <h2 className="card-text mb-1" style={{ color: "#5f63f2" }}>
                  $72,400
                </h2>
                <p className="card-text">
                  <span className="pr-1">
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "10px", color: "#5f63f2" }}
                      icon={faCircle}
                    />
                  </span>
                  <small className="text-muted">Current Period</small>
                </p>
              </div>
              <div className="pl-5">
                <h2 className="card-text mb-1">$54,240</h2>
                <p className="card-text">
                  <span className="pr-1">
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "10px", color: "gray" }}
                      icon={faCircle}
                    />
                  </span>
                  <small className="text-muted">Previous Period</small>
                </p>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ height: "300px" }}>
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "# of Current",
                    data: [18, 13, 33, 15, 42, 23, 36, 23, 44, 17, 34, 27],
                    backgroundColor: ["#5f63f2"],
                    borderColor: ["#5f63f2"],
                    borderWidth: 1,
                  },
                  {
                    label: "# of Previous",
                    data: [24, 27, 36, 24, 19, 16, 26, 29, 21, 17, 20, 23],
                    backgroundColor: ["gray"],
                    borderColor: ["gray"],
                    borderWidth: 1,
                  },
                ],
              }}
              height={75}
              width={75}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
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
          <div className="card-body" style={{ height: "330px" }}>
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
      </div>
    </div>
  );
};

export default Revenue;
