import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <td>Petrol (Manual)</td>
            <td className="left">24.0 kmpl</td>
          </tr>
          <tr>
            <td>Petrol (Automatic)</td>
            <td className="left">22.0 kmpl</td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <tbody>
          <tr>
            <td>Disel (Manual)</td>
            <td className="left">25.0 kmpl</td>
          </tr>
          <tr>
            <td>CNG (Manual)</td>
            <td className="left">20 km/kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
