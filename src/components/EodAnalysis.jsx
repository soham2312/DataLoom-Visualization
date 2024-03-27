import React from "react";

import { Line } from "react-chartjs-2";
import value from "../Data/Retail_Sample_BSA_Report.json";

const EODData = value?.Data?.["Eod analysis"]?.["EOD MONTH WISE"];

const maxEodData = EODData.map((entry) => parseFloat(entry.MaxEod) || 0);
const minEodData = EODData.map((entry) => parseFloat(entry.minEod) || 0);
const averageEodData = EODData.map(
  (entry) => parseFloat(entry.averageEod) || 0
);
const closingBalanceData = EODData.map(
  (entry) => parseFloat(entry.closingbalance) || 0
);
const openingBalanceData = EODData.map(
  (entry) => parseFloat(entry.openingBalance) || 0
);

const labels = EODData.map((entry) => entry.monthYear);

const data = {
  labels: labels,
  datasets: [
    {
      label: "MaxEod",
      data: maxEodData,
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "MinEod",
      data: minEodData,
      fill: false,
      borderColor: "rgba(255,99,132,1)",
    },
    {
      label: "AverageEod",
      data: averageEodData,
      fill: false,
      borderColor: "rgba(54, 162, 235, 1)",
    },
    {
      label: "ClosingBalance",
      data: closingBalanceData,
      fill: false,
      borderColor: "rgba(255, 206, 86, 1)",
    },
    {
      label: "OpeningBalance",
      data: openingBalanceData,
      fill: false,
      borderColor: "rgba(255, 206, 86, 1)",
    },
  ],
};

const EOD = () => {
  return (
    <div className="graph_container">
      <Line data={data} />
    </div>
  );
};

export default EOD;
