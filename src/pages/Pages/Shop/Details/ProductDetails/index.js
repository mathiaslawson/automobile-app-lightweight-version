import React from "react";

function index() {
  return (
    <>
      <div className="mt-5">
        <p className="fs-5 fw-lighter">
          The steering system in a vehicle is responsible for allowing the
          driver to control the direction of the vehicle's movement. It consists
          of several components, including the steering wheel, steering column,
          and power steering pump. It's worth noting that there are different
          types of steering systems used in vehicles, including rack-and-pinion
          and recirculating ball steering systems. While the basic principles
          remain the same, the specific design and components may vary between
          different vehicle models and manufacturers.
        </p>

        <ol>
          <li className="fs-5 mt-4 fw-lighter">
            <b> Steering Wheel:</b> The steering wheel is the part of the
            steering system that the driver directly interacts with. It is
            typically a circular device that the driver uses to turn the front
            wheels of the vehicle. The steering wheel is connected to the
            steering column.
          </li>
          <li className="fs-5 mt-4 fw-lighter">
            <b>Steering Column:</b> The steering column is a shaft-like
            structure that connects the steering wheel to the steering gear or
            rack. It serves as a pathway for transferring the driver's input
            from the steering wheel to the steering gear.
          </li>
          <li className="fs-5 mt-4 fw-lighter">
            <b>Power Steering Pump:</b> In modern vehicles, many steering
            systems are equipped with power steering, which assists the driver
            in turning the wheels with less effort. The power steering pump is a
            hydraulic pump
          </li>
        </ol>

        <p className="fs-5 mt-4 fw-lighter">
          When the driver turns the steering wheel, the movement is transmitted
          through the steering column to the steering gear or rack. The steering
          gear or rack converts the rotational motion of the steering wheel into
          linear motion, which ultimately controls the movement of the vehicle's
          front wheels. If power steering is present, the power steering pump
          helps apply hydraulic pressure to assist in turning the wheels.
        </p>
      </div>
    </>
  );
}

export default index;
