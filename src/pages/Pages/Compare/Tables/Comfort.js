import React from "react";

const Comfort = () => {
  return (
    <>
      <div className="mt-5">
        <h4>
        Comfort
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
              <td>Connectivity</td>
              <td className="p-3">Apple CarPlay</td>
              <td className="p-3">Apple CarPlay</td>
            </tr>
            <tr>
              <td>USB Charger</td>
              <td className="left p-3">Rear</td>
              <td className="left p-3">Rear</td>
            </tr>
           
            <tr>
              <td>Air Conditioner</td>
              <td className="left p-3">Yes</td>
              <td className="left p-3">Yes</td>
            </tr>
            <tr>
              <td>Parking Sensor</td>
              <td className="left p-3">Yes</td>
              <td className="left p-3">No</td>
            </tr>
            {/* <tr>
              <td>Max. Power</td>
              <td className="left p-3">142 kw 7000 rpm</td>
              <td className="left p-3">140 kw 7000 rpm</td>
            </tr> */}
            <tr>
              <td>Automatic Climate Control</td>
              <td className="left p-3">No</td>
              <td className="left p-3">Rear</td>
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

export default Comfort;
