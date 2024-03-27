import React from "react";
import error from "../assets/error.jpeg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <img src={error} alt="" />
      <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Error;
