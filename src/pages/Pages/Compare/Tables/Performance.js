import React from "react";

const Performance = () => {
  return (
    <>
      <div className="mt-5">
        <h4>
        Performance
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
              <td>Braking (80-0 kmph)</td>
              <td className="p-3">00</td>
              <td className="p-3">40 Meters</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td className="left p-3">Petrol</td>
              <td className="left p-3">Gasoline</td>
            </tr>
           
            <tr>
              <td>Fuel Capacity</td>
              <td className="left p-3">35,533 cc</td>
              <td className="left p-3">34,563 cc</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td className="left p-3">40 Liters</td>
              <td className="left p-3">40 Liters</td>
            </tr>
            {/* <tr>
              <td>Max. Power</td>
              <td className="left p-3">142 kw 7000 rpm</td>
              <td className="left p-3">140 kw 7000 rpm</td>
            </tr> */}
            <tr>
              <td>Mileage</td>
              <td className="left p-3">6,378 miles</td>
              <td className="left p-3">6,7053 miles</td>
            </tr>
            {/* <tr>
              <td>Gear Box</td>
              <td className="left p-3">8 Speed</td>
              <td className="left p-3">8 Speed</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Performance;
