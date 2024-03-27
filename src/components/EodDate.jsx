import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import value from "../Data/Retail_Sample_BSA_Report.json";

const EODData = value?.Data?.["Eod analysis"]?.["Eod Daily"];

const EODbydate = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedMonth, setSelectedMonth] = useState("01");

  const filteredEODData = [];

  for (let i = 0; i < EODData.length; i++) {
    const entry = EODData[i];
    if (
      selectedYear === entry.date.split("-")[2] &&
      selectedMonth === entry.date.split("-")[1]
    ) {
      filteredEODData.push(entry);
    }
  }

  const dataa = filteredEODData.map((entry) => parseFloat(entry.data) || 0);
  const closing = filteredEODData.map(
    (entry) => parseFloat(entry.closing) || 0
  );

  const labels = filteredEODData.map((entry) => entry.date);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "data",
        data: dataa,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "closing",
        data: closing,
        fill: false,
        borderColor: "rgba(255, 206, 86, 1)",
      },
    ],
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  const monthNames = [
    { value: "01", name: "January" },
    { value: "02", name: "February" },
    { value: "03", name: "March" },
    { value: "04", name: "April" },
    { value: "05", name: "May" },
    { value: "06", name: "June" },
    { value: "07", name: "July" },
    { value: "08", name: "August" },
    { value: "09", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];

  return (
    <div className="graph_container">
      <div className="graph_container_buttons">
        <div>
          <select
            className="custom-select"
            onChange={handleYearChange}
            value={selectedYear}
          >
            {[
              ...new Set(EODData.map((entry) => entry.monthyear.split(" ")[1])),
            ].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="custom-select"
            onChange={handleMonthChange}
            value={selectedMonth}
          >
            {monthNames.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Line data={data} />
    </div>
  );
};

export default EODbydate;
