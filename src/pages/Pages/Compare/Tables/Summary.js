import React from "react";

const Table = () => {
  return (
    <>
      <div className="mt-5">
        <h4>
          Summary
          <img
            src="https://freesvg.org/img/roystonlodge-rough-sketch-line.png"
            alt="line"
            width="50"
            className="mx-2"
          ></img>
        </h4>
      </div>

      <div className="table-container mt-5">
        <table className="table ">
          <tbody>
            <tr>
              <th>Basic Info</th>
              <th className="p-3">Tesla Model S</th>
              <th className="p-3">Benz AMG GT</th>
            </tr>
            <tr>
              <td>Brand Name</td>
              <td className="left p-3">Tesla Model</td>
              <td className="left p-3">Mercedes-Benz</td>
            </tr>
            <tr>
              <td>Price</td>
              <td className="left p-3">GHC 60,321.00</td>
              <td className="left p-3">GHC 54,321.00</td>
            </tr>
            <tr>
              <td>Engine Speed</td>
              <td className="left p-3">35,533 cc</td>
              <td className="left p-3">34,563 cc</td>
            </tr>
            <tr>
              <td>Body Type</td>
              <td className="left p-3">Hatchback</td>
              <td className="left p-3">Convertible</td>
            </tr>
            <tr>
              <td>Max. Power</td>
              <td className="left p-3">142 kw 7000 rpm</td>
              <td className="left p-3">140 kw 7000 rpm</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td className="left p-3">6,378 miles</td>
              <td className="left p-3">6,7053 miles</td>
            </tr>
            <tr>
              <td>Steering</td>
              <td className="left p-3">Left</td>
              <td className="left p-3">Right</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
