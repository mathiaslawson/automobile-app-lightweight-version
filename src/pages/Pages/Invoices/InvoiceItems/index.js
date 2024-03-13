import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import * as moment from "moment";
// import './index.css'
// import img from "./img.png";

// Import Images
import img from "../../../../assets/images/green.png";
import nodata from "../../../../assets/images/nodata.png";

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Table,
  FormFeedback,
  Spinner,
} from "reactstrap";
import Select from "react-select";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import SaveLoader from "../../../../Components/Common/SaveLoader";
import DeleteModal from "../../../../Components/Common/DeleteModal";
//import { ADD_CATEGORIES_RESET } from "../../../store/category/actionType";

//Import actions
import //   getCategoryAction,
//   addNewCategory,
//   updateCategory,
//   deleteContact as onDeleteContact,
"../../../../store/actions";
//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainer from "../../../../Components/Common/TableContainer";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import Loader from "../../../../Components/Common/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Export Modal
import ExportCSVModal from "../../../../Components/Common/ExportCSVModal";

const InvoiceItems = () => {
  const dispatch = useDispatch();
  const {
    categories,
    isCatCreated,
    loading,
    isContactSuccess,
    error,
    updateloadding,
    saveloadding,
  } = useSelector((state) => ({
    // categories: state.Category.categories,
    // isCatCreated: state.Category.isCatCreated,
    // isContactSuccess: state.Category.isContactSuccess,
    // error: state.Category.error,
    // loading: state.Category.loading,
    // updateloadding: state.Category.updateloadding,
    // saveloadding: state.Category.saveloadding,
  }));

  useEffect(() => {
    // dispatch(getCategoryAction());
  }, [dispatch]);

  useEffect(() => {
    setContact(categories);
  }, [categories]);

  useEffect(() => {
    if (!isEmpty(categories)) {
      setContact(categories);
      setIsEdit(false);
    }
  }, [categories]);

  const [isEdit, setIsEdit] = useState(false);
  const [contact, setContact] = useState([]);

  //delete Conatct
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setContact(null);
      setIsEdit(false);
    } else {
      setModal(true);
      setTag([]);
      setAssignTag([]);
    }
  }, [modal]);

  // Delete Data
  const handleDeleteContact = () => {
    if (contact) {
      //   dispatch(onDeleteContact(contact._id));
      setDeleteModal(false);
    }
  };

  const onClickDelete = (contact) => {
    setContact(contact);
    setDeleteModal(true);
  };

  // Add Data
  const handleContactClicks = () => {
    setContact("");
    setIsEdit(false);
    toggle();
  };

  // Date & Time Format

  const dateFormat = () => {
    var d = new Date(),
      months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
  };

  const timeFormat = () => {
    let d = new Date();
    let minutes =
      d.getMinutes().toString().length === 1
        ? "0" + d.getMinutes()
        : d.getMinutes();
    let hours = d.getHours().toString() % 12 || 12;
    hours = hours <= 9 ? (hours = "0" + hours) : hours;
    let ampm = d.getHours() >= 12 ? "PM" : "AM";
    return hours + ":" + minutes + ampm;
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (contact && contact.img) || '',
      invoice_id: (contact && contact.invoice_id) || "",
      description: (contact && contact.description) || "",
      quantity: (contact && contact.quantity) || "",
      unit_price: (contact && contact.unit_price) || "",
      line_total: (contact && contact.line_total) || "",
    },
    validationSchema: Yup.object({
      invoice_id: Yup.string().required("This field should not be empty"),
      description: Yup.string().required("This field should not be empty"),
      quantity: Yup.string().required("This field should not be empty"),
      unit_price: Yup.string().required("This field should not be empty"),
      line_total: Yup.string().required("This field should not be empty"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        console.log(contact);
        const updatePayload = {
          category_id: contact.id,
          category_name: values.category_name,
          description: values.category_name,
        };
        // update Contact
        // dispatch(updateCategory(updatePayload));
        validation.resetForm();
      } else {
        // save new Contact
        // dispatch(addNewCategory(values));
        validation.resetForm();
      }
      toggle();
    },
  });

  // Update Data
  const handleContactClick = useCallback(
    (arg) => {
      const contact = arg;
      setContact({
        id: contact.category_id,
        category_name: contact.category_name,
        description: contact.description,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Node API
  useEffect(() => {
    if (isCatCreated) {
      setContact(null);
      //   dispatch(getCategoryAction());
      // dispatch({ type: ADD_CATEGORIES_RESET });
    }
  }, [dispatch, isCatCreated]);

  const handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const handleValidTime = (time) => {
    const time1 = new Date(time);
    const getHour = time1.getUTCHours();
    const getMin = time1.getUTCMinutes();
    const getTime = `${getHour}:${getMin}`;
    var meridiem = "";
    if (getHour >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    const updateTime =
      moment(getTime, "hh:mm").format("hh:mm") + " " + meridiem;
    return updateTime;
  };

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".contactCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);

  const deleteMultiple = () => {
    const checkall = document.getElementById("checkBoxAll");
    selectedCheckBoxDelete.forEach((element) => {
      //   dispatch(onDeleteContact(element.value));
      setTimeout(() => {
        toast.clearWaitingQueue();
      }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".contactCheckBox:checked");
    ele.length > 0
      ? setIsMultiDeleteButton(true)
      : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };

  // Column
  const columns = useMemo(
    () => [
      {
        Header: "Invoice",
        accessor: "invoice",
        filterable: false,
      },
      {
        Header: "Description",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Quantity",
        accessor: "quantity",
        filterable: false,
      },
      {
        Header: "Unit",
        accessor: "unit",
        filterable: false,
      },
      {
        Header: "Line Total",
        accessor: "line_total",
        filterable: false,
      },

      {
        Header: "CreatedAt",
        Cell: (contact) => (
          <>
            {handleValidDate(contact.row.original.created_at)},{" "}
            <small className="text-muted">
              {handleValidTime(contact.row.original.created_at)}
            </small>
          </>
        ),
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              {/* <li className="list-inline-item edit" title="Call">
                <Link to="#" className="text-muted d-inline-block">
                  <i className="ri-phone-line fs-16"></i>
                </Link>
              </li>
              <li className="list-inline-item edit" title="Message">
                <Link to="#" className="text-muted d-inline-block">
                  <i className="ri-question-answer-line fs-16"></i>
                </Link>
              </li> */}
              <li className="list-inline-item">
                <UncontrolledDropdown>
                  <DropdownToggle
                    href="#"
                    className="btn btn-sm dropdown"
                    tag="button"
                    style={{ boxShadow: "none", fontWeight: "bolder" }}
                  >
                    <i className="ri-more-fill align-middle"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        const contactData = cellProps.row.original;
                        setInfo(contactData);
                      }}
                    >
                      <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                      View
                    </DropdownItem>
                    <DropdownItem
                      className="dropdown-item edit-item-btn"
                      href="#"
                      onClick={() => {
                        const contactData = cellProps.row.original;
                        handleContactClick(contactData);
                      }}
                    >
                      <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                      Edit
                    </DropdownItem>
                    {/* <DropdownItem
                      className="dropdown-item remove-item-btn"
                      href="#"
                      onClick={() => {
                        const contactData = cellProps.row.original;
                        onClickDelete(contactData);
                      }}
                    >
                      <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                      Delete
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          );
        },
      },
    ],
    [handleContactClick, checkedAll]
  );

  const [tag, setTag] = useState([]);
  const [assignTag, setAssignTag] = useState([]);

  // SideBar Contact Deatail
  const [info, setInfo] = useState([]);

  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  document.title = "Vehicle Type | Auomobile - ADMINUI";

  const cars = [
    {
      value: "BMW m5 Competetion",
      label: "BMW m5 Competetion",
    },
    {
      value: "BMW m8 Coupe",
      label: "BMW m8 Coupe",
    },
  ];

  const options = [
    {
      value: "4.5 L Tank",
      label: "4.5 L Tank",
    },
  ];

  const make = [
    {
      value: "BMW",
      label: "BMW",
    },
    {
      value: "Audi",
      label: "Audi",
    },
  ];
  const type = [
    {
      value: "Electric",
      label: "Electric",
    },
    {
      value: "Manual",
      label: "Manual",
    },
  ];
  const year = [
    {
      value: "2023",
      label: "2023",
    },
  ];

  const status = [
    {
      value: "4.5 L Tank",
      label: "4.5 L Tank",
    },
  ];

  const price = [
    {
      value: "Tier 1 Price",
      label: "Tier 1 Price",
    },
  ];
  const deal = [
    {
      value: "Kwesi Kain",
      label: "Kwesi Kain",
    },
    {
      value: "Harry James",
      label: "Harry James",
    },
  ];
  const service = [
    {
      value: "Fuel Change",
      label: "Fuel Change",
    },
    {
      value: "Spark Plug Change",
      label: "Spark Plug Change",
    },
  ];

  let featureOptions = options?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });

  let vehicleOptions = cars?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });
  let makeOptions = make?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });
  let typeOptions = type?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });
  let pricingOptions = price?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });
  let dealerOptions = deal?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });
  let serviceOptions = service?.map(function (item) {
    return {
      value: item.value,
      label: item.label,
    };
  });

  const users = [
    {
      invoice: " Fuel Change",
      description: " Description for test fuel change",
      quantity: "300",
      unit: "Litres",
      line_total: "100.00",

      created_at: "2023-11-30T02:33:41.023Z",
    },
    {
      invoice: " Fuel Change",
      description: " Description for test fuel change",
      quantity: "300",
      unit: "Litres",
      line_total: "100.00",

      created_at: "2023-11-30T02:33:41.023Z",
    },
    {
      invoice: " Fuel Change",
      description: " Description for test fuel change",
      quantity: "300",
      unit: "Litres",
      line_total: "100.00",

      created_at: "2023-11-30T02:33:41.023Z",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <ExportCSVModal
          show={isExportCSV}
          onCloseClick={() => setIsExportCSV(false)}
          data={users}
        />

        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteContact}
          onCloseClick={() => setDeleteModal(false)}
        />

        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            deleteMultiple();
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />

        <Container fluid>
          {/* <BreadCrumb title="Create User Roles" pageTitle="System Roles" /> */}
          <Row>
            <Col lg={12}>
              <Card
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "40px",
                  overflow: "hidden",
                  border: "1px solid #e0e0e0",
                }}
              >
                <CardHeader
                  style={{
                    backgroundColor: "white",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    boxShadow: "none",
                    outline: "none",
                  }}
                >
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <div className="flex-grow-1">
                      <button
                        style={{
                          boxShadow: "none",
                          backgroundColor: "white",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border: "1px solid #e0e0e0",
                        }}
                        disabled={
                          updateloadding || saveloadding === true ? true : false
                        }
                        className="btn "
                        onClick={() => {
                          setModal(true);
                        }}
                      >
                        {/* {updateloadding || saveloadding === true ? (
                          ""
                        ) : (
                          <i className="ri-add-fill me-1 align-bottom"></i>
                        )} */}
                        <i
                          className="bx bx-plus mx-1"
                          style={{
                            position: "relative",
                            top: "0.1rem",
                            fontWeight: "bolder",
                          }}
                        ></i>
                        Create Invoice Item
                        {/* {updateloadding || saveloadding === true ? (
                          <SaveLoader />
                        ) : (
                          ""
                        )} */}
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="hstack text-nowrap gap-2">
                        {isMultiDeleteButton && (
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#8b3af8",
                              color: "gray",
                              boxShadow: "none",
                              fontWeight: "bolder",
                            }}
                            onClick={() => setDeleteModalMulti(true)}
                          >
                            <i className="ri-delete-bin-2-line"></i>
                          </button>
                        )}
                        {/* <button className="btn btn-danger">
                          <i className="ri-filter-2-line me-1 align-bottom"></i>{" "}
                          Filters
                        </button> */}
                        <button
                          className="btn "
                          style={{
                            boxShadow: "none",
                            backgroundColor: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid #e0e0e0",
                          }}
                          onClick={() => setIsExportCSV(true)}
                        >
                          Export
                        </button>

                        {/* <UncontrolledDropdown>
                          <DropdownToggle
                            href="#"
                            className="btn btn-soft-info"
                            tag="button"
                          >
                            <i className="ri-more-2-fill"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem className="dropdown-item" href="#">All</DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">Last Week</DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">Last Month</DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">Last Year</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
            <Col xxl={9}>
              <Card
                id="contactList"
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "40px",
                  overflow: "hidden",
                  border: "1px solid #e0e0e0",
                }}
              >
                <CardBody
                  className="pt-0"
                  style={{
                    backgroundColor: "transpaernt",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    boxShadow: "none",
                    outline: "none",
                  }}
                >
                  <div>
                    {!loading && users.length > 0 ? (
                      <TableContainer
                        columns={columns}
                        data={users || []}
                        isGlobalFilter={true}
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card mb-3"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        handleContactClick={handleContactClicks}
                        isContactsFilter={true}
                        SearchPlaceholder="Search assigned features..."
                      />
                    ) : loading === true ? (
                      <Loader error={error} />
                    ) : (
                      <>
                        <p className="hstack justify-content-center d-flex mt-4 fw-bolder">
                          <img
                            src={nodata}
                            alt="nodata"
                            className="img-fluid"
                            width="400"
                          ></img>
                        </p>
                        <p className="hstack justify-content-center d-flex mt-4 fw-bolder text-light">
                          You have no roles setup yet{" "}
                        </p>
                      </>
                    )}
                  </div>

                  <Modal
                    id="showModal"
                    isOpen={modal}
                    toggle={toggle}
                    centered
                    size="lg"
                    style={{ overflow: "hidden" }}
                  >
                    {/* <ModalHeader className="p-3 text-light" toggle={toggle}
                    style={{backgroundColor: "#ffa500"}}
                    >
                     <p className="text-light">{!!isEdit ? "Edit Category" : "Add Category"}</p> 
                    </ModalHeader> */}

                    <Row>
                      {/* Left Column with Light Terrazzo Background and Image */}
                      <Col
                        md={4}
                        className="left-column"
                        xl={4}
                         style={{ overflow: "hidden", display: 'none' }}
                      >
                        {/* Your content, image, or any other elements */}
                        <div className="text-center mt-5">
                          <p className="text-dark fw-bolder">
                            {!!isEdit
                              ? "Update Invoice Item "
                              : "Add Invoce Item"}
                          </p>
                        </div>
                        <div className="content mt-2">
                          <img
                            src={img}
                            alt="modalImage"
                            className="img-fluid"
                          ></img>
                        </div>
                      </Col>

                      {/* Right Column */}
                      <Col md={12} xl={12}>
                        <div className="p-5 mb-5">
                          <Form
                            className="tablelist-form"
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                          >
                            <ModalBody>
                              <Input type="hidden" id="id-field" />
                              <Row className="g-3">
                                <Col className="mt-4" lg={12}>
                                  <p className=" mb-2">
                                    {" "}
                                    <Link
                                      to="#"
                                      className="float-end text-decoration-underline"
                                    ></Link>
                                    Invoice
                                  </p>

                                  <Select
                                    name="invoice_id"
                                    value={serviceOptions.find(function (e) {
                                      return (
                                        (!isEdit ? e.label : e.value) ===
                                        validation.values.invoice_id
                                      );
                                    })}
                                    onChange={(e) =>
                                      validation.setFieldValue(
                                        "invoice_id",
                                        e.value
                                      )
                                    }
                                    className="mb-0"
                                    options={serviceOptions}
                                    id="taginput-choices"
                                  ></Select>
                                  <p style={{ color: "red" }} className="mt-2">
                                    {validation.errors.invoice_id}
                                  </p>
                                </Col>
                                {/* 
                              <Col className="mt-4" lg={12}>
                                  <p className=" mb-2">
                                    {" "}
                                    <Link
                                      to="#"
                                      className="float-end text-decoration-underline"
                                    ></Link>
                                    Select Service 
                                  </p>

                                  <Select
                                    name="service_id"
                                    value={serviceOptions.find(function (e) {
                                      return (
                                        (!isEdit ? e.label : e.value) ===
                                        validation.values.service_id
                                      );
                                    })}
                                    onChange={(e) =>
                                      validation.setFieldValue(
                                        "service_id",
                                        e.value
                                      )
                                    }
                                    className="mb-0"
                                    options={serviceOptions}
                                    id="taginput-choices"
                                  ></Select>
                                  <p style={{ color: "red" }} className="mt-2">
                                    {validation.errors.service_id}
                                  </p>
                                </Col> */}

                                <Col lg={12}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Description
                                    </Label>
                                    <Input
                                      name="description"
                                      id="description"
                                      className="form-control"
                                      placeholder="Enter Issue Date"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.description || ""
                                      }
                                      invalid={
                                        validation.touched.description &&
                                        validation.errors.description
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.description &&
                                    validation.errors.description ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.description}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>

                                <Col lg={12}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Quantity
                                    </Label>
                                    <Input
                                      name="quantity"
                                      id="quantity"
                                      className="form-control"
                                      placeholder="Enter Quantity"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.quantity || ""}
                                      invalid={
                                        validation.touched.quantity &&
                                        validation.errors.quantity
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.quantity &&
                                    validation.errors.quantity ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.quantity}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>

                                <Col lg={12}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Unit Price
                                    </Label>
                                    <Input
                                      name="unit_price"
                                      id="unit_price"
                                      className="form-control"
                                      placeholder="Enter Unit Price"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.unit_price || ""}
                                      invalid={
                                        validation.touched.unit_price &&
                                        validation.errors.unit_price
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.unit_price &&
                                    validation.errors.unit_price ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.unit_price}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={12}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Line Total
                                    </Label>
                                    <Input
                                      name="line_total"
                                      id="line_total"
                                      className="form-control"
                                      placeholder="Enter Line Total"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.line_total || ""}
                                      invalid={
                                        validation.touched.line_total &&
                                        validation.errors.line_total
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.line_total &&
                                    validation.errors.line_total ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.line_total}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>

                                {/* <Row className="mt-4">
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Color
                                    </Label>
                                    <Input
                                      name="color"
                                      id="color"
                                      className="form-control"
                                      placeholder="Enter Year"
                                      type="color"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.color || ""
                                      }
                                      invalid={
                                        validation.touched.color &&
                                        validation.errors.color
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.color &&
                                    validation.errors.color ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.color}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Color
                                    </Label>
                                    <Input
                                      name="vin_number"
                                      id="vin_number"
                                      className="form-control"
                                      placeholder="Enter Vin Number"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.vin_number || ""
                                      }
                                      invalid={
                                        validation.touched.vin_number &&
                                        validation.errors.vin_number
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.vin_number &&
                                    validation.errors.vin_number ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.vin_number}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                </Row>
                                <Row className="mt-4">
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Mileage
                                    </Label>
                                    <Input
                                      name="mileage"
                                      id="mileage"
                                      className="form-control"
                                      placeholder="Enter Mileage"
                                      type="mileage"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.mileage || ""
                                      }
                                      invalid={
                                        validation.touched.mileage &&
                                        validation.errors.mileage
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.mileage &&
                                    validation.errors.mileage ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.mileage}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Price
                                    </Label>
                                    <Input
                                      name="price"
                                      id="price"
                                      className="form-control"
                                      placeholder="Enter Price"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.price || ""
                                      }
                                      invalid={
                                        validation.touched.price &&
                                        validation.errors.price
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.price &&
                                    validation.errors.price ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.price}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                </Row>
                                <Row className="mt-4">
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Status
                                    </Label>
                                    <Input
                                      name="mileage"
                                      id="mileage"
                                      className="form-control"
                                      placeholder="Enter Mileage"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.mileage || ""
                                      }
                                      invalid={
                                        validation.touched.mileage &&
                                        validation.errors.mileage
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.mileage &&
                                    validation.errors.mileage ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.mileage}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Transmission Type
                                    </Label>
                                    <Input
                                      name="price"
                                      id="price"
                                      className="form-control"
                                      placeholder="Enter Price"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.price || ""
                                      }
                                      invalid={
                                        validation.touched.price &&
                                        validation.errors.price
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.price &&
                                    validation.errors.price ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.price}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                </Row>
                                <Row className="mt-4">
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Engine Size
                                    </Label>
                                    <Input
                                      name="engine_size"
                                      id="engine_size"
                                      className="form-control"
                                      placeholder="Enter Engine Size"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.engine_size || ""
                                      }
                                      invalid={
                                        validation.touched.engine_size &&
                                        validation.errors.engine_size
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.engine_size &&
                                    validation.errors.engine_size ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.engine_size}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Resgistration Plate
                                    </Label>
                                    <Input
                                      name="registration_plate"
                                      id="registration_plate"
                                      className="form-control"
                                      placeholder="Enter Registration Plate"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.registration_plate || ""
                                      }
                                      invalid={
                                        validation.touched.registration_plate &&
                                        validation.errors.registration_plate
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.registration_plate &&
                                    validation.errors.registration_plate ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.registration_plate}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                </Row>
                                <Row className="mt-4">
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Purchase Date
                                    </Label>
                                    <Input
                                      name="purchase_date"
                                      id="purchase_date"
                                      className="form-control"
                                      placeholder="Enter Engine Size"
                                      type="time"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.purchase_date || ""
                                      }
                                      invalid={
                                        validation.touched.purchase_date &&
                                        validation.errors.purchase_date
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.purchase_date &&
                                    validation.errors.purchase_date ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.purchase_date}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Purchase Price
                                    </Label>
                                    <Input
                                      name="purchase_price"
                                      id="purchase_price"
                                      className="form-control"
                                      placeholder="Enter Purchase Price"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.purchase_price || ""
                                      }
                                      invalid={
                                        validation.touched.purchase_price &&
                                        validation.errors.purchase_price
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.purchase_price &&
                                    validation.errors.purchase_price ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.purchase_price}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
                                </Row> */}
                              </Row>
                            </ModalBody>
                            <ModalFooter>
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                   style={{
                                    backgroundColor: "#8b3af8",
                                    color: "white",
                                    boxShadow: "none",
                                    borderRadius: '20px'
                                  }}
                                  onClick={() => {
                                    setModal(false);
                                    setContact(null);
                                    setIsEdit(false);
                                  }}
                                >
                                  {" "}
                                  Close{" "}
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  style={{
                                    backgroundColor: "white",
                                    border: "1px solid #8b3af8",
                                    color: "black",
                                    boxShadow: "none",
                                    borderRadius: '20px'
                                  }}
                                  id="add-btn"
                                >
                                  {" "}
                                  {!!isEdit ? "Update" : "Save"}{" "}
                                </button>
                              </div>
                            </ModalFooter>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Modal>
                  {/* <ToastContainer closeButton={false} limit={} /> */}
                </CardBody>
              </Card>
            </Col>

            <Col xxl={3}>
              <Card
                id="contact-view-detail"
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "40px",
                  overflow: "hidden",
                  border: "1px solid #e0e0e0",
                }}
              >
                <CardBody className="text-center">
                  <div className="position-relative d-inline-block">
                    {/* <img
                      src={process.env.REACT_APP_API_URL + "/images/users/" + (info.image_src || "avatar-10.jpg")}
                      alt=""
                      className="avatar-lg rounded-circle img-thumbnail"
                    /> */}
                    <span className="contact-active position-absolute rounded-circle bg-success">
                      <span className="visually-hidden"></span>
                    </span>
                  </div>
                </CardBody>
                <CardBody>
                  <div className="table-responsive table-card">
                    <Table className="table table-borderless mb-0">
                      <tbody>
                        {/* <tr>
                          <td className="fw-medium">Name</td>
                          <td>{info.category_name}</td>
                        </tr> */}
                      </tbody>
                    </Table>

                    <div className="p-3">
                      <div className="text-center">
                        <h5 className="text-start">
                          Invoice Items
                          <div>
                            <hr
                              style={{
                                width: "10%",
                                border: "2px solid #8b3af8",
                              }}
                              className="fw-bolder"
                            />
                          </div>
                        </h5>
                        <img
                          src="https://images.assetsdelivery.com/compings_v2/alwie99d/alwie99d2301/alwie99d230104506.jpg"
                          alt="fuel"
                          width="260"
                        ></img>
                      </div>

                      <p
                        style={{
                          wordSpacing: "0.2rem",
                          lineHeight: "1.4rem",
                          backgroundColor: "#f2f2f7",
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                        }}
                        className="p-3 fw-light text-muted"
                      >
                        <i className="bx bx-error-circle fw-bolder text-dark mx-2 mt-2 fs-5"></i>
                      
Streamline your invoicing process by efficiently managing invoice items through our user-friendly platform. Easily create, customize, and organize individual items for clear and detailed invoicing. The intuitive interface ensures seamless tracking and efficient management of each invoice item, enhancing your financial record-keeping. Simplify your invoicing tasks and maintain a comprehensive overview of individual items with ease through our accessible platform.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default InvoiceItems;
