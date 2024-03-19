import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <td>Make</td>
            <td className="left">lamborghini</td>
          </tr>
          <tr>
            <td>Model</td>
            <td className="left">lamborghini ave11</td>
          </tr>
          <tr>
            <td>Year/Month</td>
            <td className="left">2023</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td className="left">25,100 miles</td>
          </tr>
          <tr>
            <td>Door’s</td>
            <td className="left">4 doors</td>
          </tr>
          <tr>
            <td>Engine</td>
            <td className="left">22,231 cc</td>
          </tr>
          <tr>
            <td>Color’s</td>
            <td className="left">sky blue</td>
          </tr>
          <tr>
            <td>Repaire</td>
            <td className="left">no</td>
          </tr>
          <tr>
            <td>Steering</td>
            <td className="left">right</td>
          </tr>
          <tr>
            <td>Steating Catacity</td>
            <td className="left">08</td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td className="left">petrol+gas</td>
          </tr>
          <tr>
            <td>No. of Cylinder</td>
            <td className="left">03</td>
          </tr>
        
          <tr>
            <td>Transmission</td>
            <td className="left">Manual</td>
          </tr>
          <tr>
            <td>Wheel’s</td>
            <td className="left">04</td>
          </tr>
        </tbody>
      </table>

      {/* <table className="table">
        <tbody>
          <tr>
            <td>Repaire</td>
            <td className="left">no</td>
          </tr>
          <tr>
            <td>Steering</td>
            <td className="left">right</td>
          </tr>
          <tr>
            <td>Steating Catacity</td>
            <td className="left">08</td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td className="left">petrol+gas</td>
          </tr>
          <tr>
            <td>No. of Cylinder</td>
            <td className="left">03</td>
          </tr>
        
          <tr>
            <td>Transmission</td>
            <td className="left">Manual</td>
          </tr>
          <tr>
            <td>Wheel’s</td>
            <td className="left">04</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Table;
