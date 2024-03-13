import React from "react";

const Safety = () => {
  return (
    <>
      <div className="mt-5">
        <h4>
        Safety
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
              <td>Seat Belts</td>
              <td className="p-3">Apple CarPlay</td>
              <td className="p-3">Apple CarPlay</td>
            </tr>
            <tr>
              <td>360 Degree Camera</td>
              <td className="left p-3">Rear</td>
              <td className="left p-3">Rear</td>
            </tr>
           
            <tr>
              <td>No.of Airbags</td>
              <td className="left p-3">05</td>
              <td className="left p-3">05</td>
            </tr>
            <tr>
              <td>Head-up Display</td>
              <td className="left p-3">Yes</td>
              <td className="left p-3">No</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Safety;
