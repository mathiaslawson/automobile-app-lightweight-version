import React from "react";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <td>Engine Size</td>
            <td className="left">3.5 L</td>
          </tr>
          <tr>
            <td>Induction</td>
            <td className="left">Aspirated</td>
          </tr>
          <tr>
            <td>Cylinders</td>
            <td className="left">6 cyl</td>
          </tr>
          <tr>
            <td>Engine Config</td>
            <td className="left">In-line</td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <tbody>
          <tr>
            <td>Valve Gear</td>
            <td className="left">DOHC with VVT</td>
          </tr>
          <tr>
            <td>Fuel Injection</td>
            <td className="left">Direct Injection</td>
          </tr>
          <tr>
            <td>Power</td>
            <td className="left">140 kw 7000 rpm</td>
          </tr>
          <tr>
            <td>Engine Location</td>
            <td className="left">front</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
