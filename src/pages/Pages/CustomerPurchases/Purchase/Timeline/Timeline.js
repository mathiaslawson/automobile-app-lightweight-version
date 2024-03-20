import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

/*
  Format: YYYY-MM-DD
  Note: Make sure dates are sorted in increasing order
*/
const VALUES = [
  "2020-06-01",
  "2020-09-01",
  "2021-10-01",
  "2022-03-01",
  "2023-01-01",
  "2023-06-17",
  "2023-08-01",
];

const App = () => {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleIndexClick = (index) => {
    setValue(index);
    setPrevious(value);
  };

  return (
    <div>
      {/* Bounding box for the Timeline */}
      <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
        <HorizontalTimeline
          index={value}
          indexClick={handleIndexClick}
          values={VALUES}
          getLabel={(value) => new Date(value).toLocaleDateString()}
          isOpened
        />
      </div>
      <div className="text-center">
        {/* any arbitrary component can go here */}
        {value === 0
          ? "Car was brough into the shop for maintenance"
          : value === 1
          ? "Car Door maintenance was done successfully"
          : value === 2
          ? "Engine Valve maintenance was done successfully"
          : value === 3
          ? "New Paint Job Completed"
          : value === 4
          ? "New Tires Fixes and Maintenance Completed"
          : value === 5
          ? "All repair and maintenance work completed successfully"
          : value === 6
          ? "Car was taken out for a test drive"
          : "Error Loading"}
      </div>
    </div>
  );
};

export default App;
