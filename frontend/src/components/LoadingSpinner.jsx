import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="center-container">
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <p>loading...</p>
    </div>
    </div>
  );
}
