import React, { useState, useEffect } from "react";
import StartUpCards from "../components/StartUpCards";
import "./StartupSearch.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import LoadingSpinner from "../components/LoadingSpinner";

const StartupSearch = () => {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [industryVertical, setIndustryVertical] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 20;

  useEffect(() => {
    if (results) {
      setTotalPages(Math.ceil(results.length / pageSize));
    }
  }, [results]);

  useEffect(() => {
    searchStartups();
  }, []);

  const searchStartups = async () => {
    setLoading(true);

    const url = `https://startupserver.vercel.app/api/filter?location=${location}&name=${name}&industryVertical=${industryVertical}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data);
      setCurrentPage(1); // Reset to the first page when new results are fetched
    } catch (error) {
      console.error("Error fetching startups:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the results array to get the startups for the current page
  const startupsForPage = results ? results.slice(startIndex, endIndex) : [];

  return (
    <div>
      <div className="heroSection">
        <div className="rightside">
          <h1>Discover all Startup's information in one place</h1>
          <input
            className="inputBox"
            placeholder="Enter Location here"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className="inputBox"
            placeholder="Enter Name here"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="inputBox"
            placeholder="Enter Industry here"
            type="text"
            value={industryVertical}
            onChange={(e) => setIndustryVertical(e.target.value)}
          />
          <br />
          <button className="searchBtn" onClick={searchStartups}>
            Search
          </button>
        </div>
        <div className="leftside">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-launch-2952669-2463074.png"
            alt="Hero"
          />
        </div>
      </div>

      {loading && <LoadingSpinner/>}

      {results && !loading && (
        <div>
          <div className="startup-list">
            {startupsForPage.map((startup, index) => (
              <StartUpCards key={index} {...startup} />
            ))}
          </div>
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              sx={{ marginBottom: 10 }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupSearch;
