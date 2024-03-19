import React from "react";

const BulletList = () => {
  return (
    <div className="">
      <ul className="mt-4 fw-bolder text-muted">
        <li className="mt-2">Safety Device</li>
        <li className="mt-2">Driver Airbag</li>
        <li className="mt-2">Passenger Airbag</li>
        <li className="mt-2">Side Airbag</li>
        <li className="mt-2">Curtain Airbag</li>
        <li className="mt-2">Knee Airbag</li>
        <li className="mt-2">Park Assist Sensor</li>
        <li className="mt-2">Rear View Camera</li>
        <li className="mt-2">ABS (Anti-lock Brake System)</li>
        <li className="mt-2">ESP (Electronic Stability Program)</li>
        <li className="mt-2">EPS (Electric Power Steering)</li>
        <li className="mt-2">TPMS (Tire Pressure Monitoring System)</li>
      </ul>

      <p className="mt-2 fw-bolder">Exterior Option</p>

      <ul className="mt-3  fw-bolder text-muted">
        <li className="mt-2">Rear Spoiler</li>
      </ul>

      <p className="mt-2 fw-bolder">Interior Option</p>

      <ul className="mt-3  fw-bolder text-muted">
        <li className="mt-2">Air Conditioner</li>
        <li className="mt-2">Heating Seat</li>
        <li className="mt-2">Leather Seats</li>
        <li className="mt-2">Power Steering</li>
        <li className="mt-2">Cruise Control</li>
        <li className="mt-2">Steering Remocon</li>
        <li className="mt-2">Navigation System</li>
        <li className="mt-2">Radio</li>
        <li className="mt-2">USB</li>
        <li className="mt-2">Bluetooth</li>
        <li className="mt-2">Auto Folding Side Mirror</li>
        <li className="mt-2">Power Windows</li>
        <li className="mt-2">Smart Key</li>
        <li className="mt-2">Button Start/Stop</li>
      </ul>
    </div>
  );
};

export default BulletList;
