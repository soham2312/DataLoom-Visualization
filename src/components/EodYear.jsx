import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import value from "../Data/Retail_Sample_BSA_Report.json";

const EODData = value?.Data?.["Eod analysis"]?.["EOD MONTH WISE"];

const EODbyyear = () => {
  const [selectedYears, setSelectedYears] = useState(["2023"]);

  const filteredEODData = [];

  for (let i = 0; i < EODData.length; i++) {
    const entry = EODData[i];

    if (selectedYears.includes(entry.monthYear.split(" ")[1])) {
      filteredEODData.push(entry);
    }
  }

  const maxEodData = filteredEODData.map(
    (entry) => parseFloat(entry.MaxEod) || 0
  );
  const minEodData = filteredEODData.map(
    (entry) => parseFloat(entry.minEod) || 0
  );
  const averageEodData = filteredEODData.map(
    (entry) => parseFloat(entry.averageEod) || 0
  );
  const closingBalanceData = filteredEODData.map(
    (entry) => parseFloat(entry.closingbalance) || 0
  );
  const labels = filteredEODData.map((entry) => entry.monthYear);

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
    ],
  };

  const handleYearChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedYears(selectedOptions);
  };

  return (
    <div className="graph_container">
      <div className="Eodyear-btn">
        <select
          className="custom-select"
          onChange={handleYearChange}
          value={selectedYears}
        >
          {[
            ...new Set(EODData.map((entry) => entry.monthYear.split(" ")[1])),
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} />
    </div>
  );
};

export default EODbyyear;
