import React from "react";
import value from "../Data/Retail_Sample_BSA_Report.json";
import { Bar } from "react-chartjs-2";

const EODData = value?.Data?.["Eod analysis"]?.["Top 10 Transactions"];

const extractData = (transactions) => {
  const data = {};

  transactions.forEach((transaction) => {
    const date = transaction.Date;
    const amount = parseFloat(transaction.Amount);

    if (!data[date]) {
      data[date] = 0;
    }

    data[date] += amount;
  });

  return data;
};

const debitData = extractData(EODData["Top 10 Debit"]);
const creditData = extractData(EODData["Top 10 Credit"]);

const dates = Object.keys({ ...debitData, ...creditData }).sort();

const debitAmounts = dates.map((date) => debitData[date] || 0);
const creditAmounts = dates.map((date) => creditData[date] || 0);

const TopTranscation = () => {
  return (
    <div className="graph_container">
      <Bar
        data={{
          labels: dates,
          datasets: [
            {
              label: "Debit",
              data: debitAmounts,
              backgroundColor: "#309892",
            },
            {
              label: "Credit",
              data: creditAmounts,
              backgroundColor: "#6b2a45",
            },
          ],
        }}
      />
    </div>
  );
};

export default TopTranscation;
