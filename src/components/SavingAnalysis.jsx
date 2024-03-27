import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import value from "../Data/Retail_Sample_BSA_Report.json";

const incomeData = value?.Data?.["SnapShot"]?.["Income"];

const SavingAnalysis = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  let filteredData = [];

  for (let i = 0; i < incomeData.length; i++) {
    if (incomeData[i].Month.split(" ")[1] === selectedYear) {
      filteredData.push(incomeData[i]);
    }
  }

  const incomes = filteredData.map((data) =>
    parseFloat(data.MonthlyIncomeByTotalIncome)
  );
  const expenses = filteredData.map((data) =>
    parseFloat(data.MonthlyExpenseByTotalIncome)
  );
  const savings = filteredData.map((data) =>
    parseFloat(data.MonthlySavingsByTotalIncome)
  );

  const labels = filteredData.map((entry) => entry.Month);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        type: "line",
        data: incomes,
        fill: false,
        borderColor: "#136f7f",
      },
      {
        label: "Expenses",
        type: "bar",
        backgroundColor: "#1fbad4",
        data: expenses,
      },
      {
        label: "Savings",
        type: "bar",
        backgroundColor: "#06252a",
        data: savings,
      },
    ],
  };

  return (
    <div className="graph_container">
      <div className="savinganalysis-btn-container">
        <div className="savinganalysis-year-btn">
          <select
            className="custom-select"
            onChange={handleYearChange}
            value={selectedYear}
          >
            {[
              ...new Set(incomeData.map((entry) => entry.Month.split(" ")[1])),
            ].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default SavingAnalysis;
