import React, { useState } from "react";
import StartupModal from "../Pages/StartupModal";
import "./StartUpCards.css";



const StartUpCards = (props) => {
  const { StartupName, IndustryVertical, CityLocation, AmountInUSD, Date,SubVertical,InvestmentType,InvestorsName} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-content">
          <h2 className="typography-heading">{StartupName}</h2>
          <p>
            <strong>Industry Vertical:</strong> {IndustryVertical}
          </p>
          <p>
            <strong>City Location:</strong> {CityLocation}
          </p>
          <p>
            <strong>Amount in USD:</strong> ${AmountInUSD || "-"}
          </p>
          <div>
            <button onClick={openModal} className="button-read-more">
              Read More
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <StartupModal
          startupInfo={{ StartupName, IndustryVertical, CityLocation, AmountInUSD, Date,SubVertical,InvestmentType,InvestorsName}}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default StartUpCards;
