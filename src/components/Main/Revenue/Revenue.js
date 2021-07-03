import React from "react";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import line1 from "../../../images/line1.JPG";
import line2 from "../../../images/line2.JPG";
import line3 from "../../../images/line3.JPG";
import line4 from "../../../images/line4.JPG";
import line5 from "../../../images/line5.JPG";
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
          <div className="card-body d-flex pb-0 ">
            <h5 className="card-title">Total Revenue</h5>
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
          <div className="card-body d-flex pb-0">
            <h5 className="card-title mb-0">Source of Revenue Generated</h5>
            <a className="ml-auto mr-2 sales-icon" href="#">
              <FontAwesomeIcon icon={faEllipsisH} />
            </a>
          </div>

          <div className="card-body pt-0">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name of Source</th>
                  <th scope="col">Visitors</th>
                  <th scope="col">Page View</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>23,556</td>
                  <td>12,465</td>
                  <td>12,465</td>
                  <td>
                    <img src={line1} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>15,447</td>
                  <td>11,847</td>
                  <td>4,634</td>
                  <td>
                    <img src={line2} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Email Marketing</td>
                  <td>10,465</td>
                  <td>8,540</td>
                  <td>5,853</td>
                  <td>
                    <img src={line3} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Direct Website</td>
                  <td>7,474</td>
                  <td>5,843</td>
                  <td>2,375</td>
                  <td>
                    <img src={line4} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Referral</td>
                  <td>4,673</td>
                  <td>2,520</td>
                  <td>1,932</td>
                  <td>
                    <img src={line5} alt="" />
                  </td>
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
