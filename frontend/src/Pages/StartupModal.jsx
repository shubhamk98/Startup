import React from "react";
import "./StartupModal.css";

const StartupModal = ({ startupInfo, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="typography-heading">{startupInfo.StartupName}</h2>
        <p>
          <strong>Industry Vertical:</strong> {startupInfo.IndustryVertical}
        </p>
        <p>
          <strong>City Location:</strong> {startupInfo.CityLocation}
        </p>
        <p>
          <strong>Amount in USD:</strong> {startupInfo.AmountInUSD || "-"}
        </p>
        <p>
          <strong>Latest upadted on:</strong> {startupInfo.Date}
        </p>
        <p>
          <strong>SubVertical:</strong> {startupInfo.SubVertical}
        </p>
        <p>
          <strong>Investors Name:</strong> {startupInfo.InvestorsName}
        </p>
        <p>
          <strong>Investment Type:</strong> {startupInfo.InvestmentType}
        </p>
   
        <button onClick={onClose} className="button-close-modal">
          Close
        </button>
      </div>
    </div>
  );
};

export default StartupModal;


