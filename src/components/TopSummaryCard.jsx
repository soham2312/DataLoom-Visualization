import React from "react";

const TopSummaryCard = ({ heading, amount, url }) => {
  return (
    <div className="topsummarycard">
      <div>
        <h2>{heading}</h2>
        <p>{amount}</p>
      </div>
      <img src={url} alt="" />
    </div>
  );
};

export default TopSummaryCard;
