import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import value from "../Data/Retail_Sample_BSA_Report.json";
import "../App.css";

const EODData = value?.Data?.["Bank Statement"];

const StatementSummary = () => {
  const [startDate, setStartDate] = useState("02-01-2015");
  const [endDate, setEndDate] = useState("01-05-2023");
  const [creditDebitSelector, setCreditDebitSelector] = useState("Credit");
  const [allFirstLevelClassification, setAllFirstLevelClassification] =
    useState([]);
  const [allCreditData, setAllCreditData] = useState([]);
  const [allDebitData, setAllDebitData] = useState([]);

  const handleSelectedLevel = (event) => {
    setCreditDebitSelector(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  useEffect(() => {
    filterData();
  }, []);

  const filterData = () => {
    const startDateObj = new Date(startDate).getTime();
    const endDateObj = new Date(endDate).getTime();

    let allCreditDebitMap = new Map();

    for (let i = 0; i < EODData.length; i++) {
      const obj = EODData[i];
      const valueDateObj = new Date(obj.Date).getTime();
      if (valueDateObj >= startDateObj && valueDateObj <= endDateObj) {
        if (!allCreditDebitMap.has(obj.FirstLevelClassification)) {
          allCreditDebitMap.set(obj.FirstLevelClassification, {
            creditValue: parseFloat(obj.Credit),
            debitValue: parseFloat(obj.Debit),
          });
        } else {
          let existingData = allCreditDebitMap.get(
            obj.FirstLevelClassification
          );
          let newCreditValue =
            existingData.creditValue + parseFloat(obj.Credit);
          let newDebitValue = existingData.debitValue + parseFloat(obj.Debit);
          allCreditDebitMap.set(obj.FirstLevelClassification, {
            creditValue: newCreditValue,
            debitValue: newDebitValue,
          });
        }
      }
    }

    let classifications = [];
    let creditValues = [];
    let debitValues = [];

    allCreditDebitMap.forEach((value, key) => {
      classifications.push(key);
      creditValues.push(value.creditValue);
      debitValues.push(value.debitValue);
    });

    setAllFirstLevelClassification(classifications);
    setAllCreditData(creditValues);
    setAllDebitData(debitValues);
  };

  const dataChart = {
    labels: allFirstLevelClassification,
    datasets: [
      {
        data: creditDebitSelector === "Credit" ? allCreditData : allDebitData,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(255, 0, 0)",
          "rgb(0, 255, 0)",
          "rgb(0, 0, 255)",
          "rgb(255, 255, 0)",
          "rgb(0, 255, 255)",
          "rgb(255, 0, 255)",
          "rgb(128, 0, 0)",
          "rgb(0, 128, 0)",
          "rgb(0, 0, 128)",
          "rgb(128, 128, 0)",
          "rgb(128, 0, 128)",
          "rgb(0, 128, 128)",
          "rgb(192, 192, 192)",
          "rgb(128, 128, 128)",
          "rgb(255, 255, 255)",
          "rgb(0, 0, 0)",
          "rgb(255, 165, 0)",
          "rgb(139, 69, 19)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="graph_container">
      <div className="date-container">
        <div className="data-content">
          <label htmlFor="startDate" className="text">
            From
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="data-content">
          <label htmlFor="endDate">To</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>

        <div>
          <select
            value={creditDebitSelector}
            onChange={handleSelectedLevel}
            className="custom-select"
          >
            {["Credit", "Debit"].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" onClick={filterData}>
          <p>Filter Data</p>
        </button>
      </div>
      <div className="statement_summary_chart">
        <Doughnut data={dataChart} height={400} className="dough" />
      </div>
    </div>
  );
};

export default StatementSummary;
