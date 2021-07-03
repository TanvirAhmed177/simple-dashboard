import React from "react";
import "../Main/Main.css";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const WeeklyCalculation = () => {
  return (
    <div className="container-fluid">
      <div className="card-deck row">
        <div
          className="card flex-lg-row pt-2 justify-content-center align-items-center"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="pl-4">
            <h4 className="card-title">$7,461</h4>
            <p className="card-text text-secondary">Orders</p>
            <p className="card-text">
              <span className="pr-1 text-success">
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
              <span className="pr-1 text-success">25%</span>
              since last week
            </p>
          </div>
          <div className="card-body" style={{ height: "200px" }}>
            <Bar
              data={{
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thus"],
                datasets: [
                  {
                    label: "# of Amount",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
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
          className="card flex-lg-row pt-2 justify-content-center align-items-center"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="pl-4">
            <h4 className="card-title">$27,461</h4>
            <p className="card-text text-secondary">Revenue</p>
            <p className="card-text">
              <span className="pr-1 text-success">
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
              <span className="pr-1 text-success">15%</span>
              since last week
            </p>
          </div>
          <div className="card-body" style={{ height: "200px" }}>
            <Bar
              data={{
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thus"],
                datasets: [
                  {
                    label: "# of Amount",
                    data: [18, 13, 33, 15, 42, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
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
          className="card flex-lg-row pt-2 justify-content-center align-items-center"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderRadius: "10px",
          }}
        >
          <div className="pl-4">
            <h4 className="card-title">$3,461</h4>
            <p className="card-text text-secondary">Avg. order value</p>
            <p className="card-text">
              {" "}
              <span className="pr-1 text-danger">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
              <span className="pr-1 text-danger">5%</span>
              since last week
            </p>
          </div>
          <div className="card-body" style={{ height: "200px" }}>
            <Bar
              data={{
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thus"],
                datasets: [
                  {
                    label: "# of Amount",
                    data: [11, 49, 3, 25, 12, 23],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
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
      </div>
    </div>
  );
};

export default WeeklyCalculation;
