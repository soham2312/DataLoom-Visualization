import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import EODbydate from "../components/EodDate";
import EODbyyear from "../components/EodYear";
import SavingAnalysis from "../components/SavingAnalysis";
import StatementSummary from "../components/StatementSummary";
import TopTranscation from "../components/TopTranscation";
import EOD from "../components/EodAnalysis";

import credit from "../assets/credit.jpeg";
import debit from "../assets/debit.jpeg";
import balance from "../assets/Balance.jpeg";
import saving from "../assets/savings.jpeg"

import TopSummaryCard from "../components/TopSummaryCard";

import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="page">
      <button
        className="sidebar-btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? (
          <RxHamburgerMenu className="icon" />
        ) : (
          <IoMdClose className="icon" />
        )}
      </button>
      <Sidebar extraclass={show ? "" : "dis"} />

      <div className="page_content">
        <TopSummaryCard heading="Credits" amount={"9,929"} url={credit} />
        <TopSummaryCard heading="Debit" amount={"34,234"} url={debit} />
        <TopSummaryCard heading="Savings" amount={"4,342"} url={saving} />
        <TopSummaryCard heading="Balance" amount={"74,342"} url={balance} />
      </div>

      <div className="graphs">
        <div className="graph-itemtext ">
          <h2>Statement summary</h2>
          <StatementSummary />
        </div>
        <div className="graph-item">
          <h2>Saving Analysis</h2>
          <SavingAnalysis />
        </div>
        <div className="graph-item">
          <h2>EOD Summary by Date</h2>
          <EODbydate />
        </div>
        <div className="graph-item">
          <h2>EOD Summary by Year</h2>
          <EODbyyear />
        </div>
        <div className="graph-item">
          <h2>Top 10 Transcation</h2>
          <TopTranscation />
        </div>
        <div className="graph-item">
          <h2>EOD Analysis</h2>
          <EOD />
        </div>
      </div>
    </div>
  );
};

export default Page;
