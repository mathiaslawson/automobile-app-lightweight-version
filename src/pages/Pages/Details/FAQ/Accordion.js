import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Col,
  Row,
  UncontrolledAccordion,
} from "reactstrap";
import "./accordion.css";

function Accordion() {
  return (
    <>
      <UncontrolledAccordion
        defaultOpen={["1", "2"]}
        stayOpen
        style={{ border: "1px solid #eaeaea", borderRadius: "10px" }}
        className="w-100 p-3"
      >
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="1">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              1.
            </span>{" "} */}
            How often should I get my car serviced?
          </AccordionHeader>
          <AccordionBody accordionId="1">
          It's always a good idea to research and read reviews specific to the dealership you're interested in, as experiences can vary even within the same dealership chain.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="2">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              2.
            </span>{" "} */}
            How often should i change my car's oil?
          </AccordionHeader>
          <AccordionBody accordionId="2">
          It's always a good idea to research and read reviews specific to the dealership you're interested in, as experiences can vary even within the same dealership chain.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="3" className="fw-bolder">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              3.
            </span>{" "} */}
            How does a The System?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard sincethe
            15000s, printer took a galley of type and scrambl.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="4" className="fw-bolder">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              4.
            </span>{" "} */}
           What type of fuel should i use for my car?
          </AccordionHeader>
          <AccordionBody accordionId="4">
          It's always a good idea to research and read reviews specific to the dealership you're interested in, as experiences can vary even within the same dealership chain.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          style={{ border: "none", borderRadius: "10px" }}
          className="m-2"
        >
          <AccordionHeader targetId="5" className="fw-bolder">
            {/* <span style={{ color: "#6990ff" }} className="fw-bolder mx-2">
              5.
            </span>{" "} */}
          What is the recommended tire pressure for my car?
          </AccordionHeader>
          <AccordionBody accordionId="5">
          It's always a good idea to research and read reviews specific to the dealership you're interested in, as experiences can vary even within the same dealership chain.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </>
  );
}

export default Accordion;
