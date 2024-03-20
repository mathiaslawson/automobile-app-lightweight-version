import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import * as moment from "moment";
// import './index.css'
// import img from "./img.png";
import "./Maintenance.css";
// Import Images
import img from "../../../../assets/images/green.png";
import nodata from "../../../../assets/images/nodata.png";
import VerticalDivider from "../../../../Components/Customer/common/Divider";

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
  Modal,
  Input,
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

// profile
import profile2 from "../../../../common/Profiles/profile2.png";
import profile1 from "../../../../common/Profiles/profile1.png";
import profile3 from "../../../../common/Profiles/profile3.png";
import profile4 from "../../../../common/Profiles/profile4.png";
import profile5 from "../../../../common/Profiles/profile5.png";
import Timeline from "./Timeline/Timeline";

const MaintenanceRecords = () => {
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
      vehicle_id: (contact && contact.vehicle_id) || "",
      customer_id: (contact && contact.customer_id) || "",
      service_id: (contact && contact.service_id) || "",
      service_date: (contact && contact.service_date) || "",
      notes: (contact && contact.notes) || "",
      total_cost: (contact && contact.total_cost) || "",
    },
    validationSchema: Yup.object({
      vehicle_id: Yup.string().required("This field should not be empty"),
      customer_id: Yup.string().required("This field should not be empty"),
      service_id: Yup.string().required("This field should not be empty"),
      service_date: Yup.string().required("This field should not be empty"),
      notes: Yup.string().required("This field should not be empty"),
      total_cost: Yup.string().required("This field should not be empty"),
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
      // {
      //   Header: (
      //     <input
      //       type="checkbox"
      //       id="checkBoxAll"
      //       className="form-check-input"
      //       onClick={() => checkedAll()}
      //     />
      //   ),
      //   Cell: (cellProps) => {
      //     return (
      //       <input
      //         type="checkbox"
      //         className="contactCheckBox form-check-input"
      //         value={cellProps.row.original._id}
      //         onChange={() => deleteCheckbox()}
      //       />
      //     );
      //   },
      //   id: "#",
      // },

      // {
      //   vehicle_name: "BMW M5 Competition",
      //   customer_name: "John Doe",
      //   notes: 'Notes to take care of service',
      //   total_cost: "200.000",
      //   service_name: "Car Door Repair",
      //   service_date: "2023-11-30T02:33:41.023Z",
      //   created_at: "2023-11-30T02:33:41.023Z",
      // },

      {
        Header: "Vehicle ",
        accessor: "vehicle_name",
        filterable: false,
      },
      {
        Header: "Customer ",
        accessor: "customer_name",
        filterable: false,
      },
      {
        Header: "Notes ",
        accessor: "notes",
        filterable: false,
      },
      {
        Header: "Total Cost(GHC)",
        accessor: "total_cost",
        filterable: false,
      },
      {
        Header: "Service Name ",
        accessor: "service_name",
        filterable: false,
      },

      {
        Header: "Service Date",
        Cell: (contact) => (
          <>
            {handleValidDate(contact.row.original.service_date)},{" "}
            <small className="text-muted">
              {handleValidTime(contact.row.original.service_date)}
            </small>
          </>
        ),
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
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Repair",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile2,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Maintnance",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile1,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Repair",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile4,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Maintnance",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile5,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Repair",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile2,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Maintnance",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile1,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Maintnance",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile4,
    },
    {
      vehicle_name: "BMW M5 Competition",
      customer_name: "John Doe",
      type: "Repair",
      notes: "Notes to take care of service",
      total_cost: "200.000",
      service_name: "Car Door Repair",
      service_date: "2023-11-30T02:33:41.023Z",
      created_at: "2023-11-30T02:33:41.023Z",
      img: profile5,
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleCardClick = (user) => {
    setSelectedUser(user);
    console.log("click");
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

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
                        Create Maintenance
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
                  backgroundColor: "transparent",
                  borderRadius: "40px",
                  overflow: "hidden",
                  border: "1px solid transparent",
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
                      // <TableContainer
                      //   columns={columns}
                      //   data={users || []}
                      //   isGlobalFilter={true}
                      //   isAddUserList={false}
                      //   customPageSize={8}
                      //   className="custom-header-css"
                      //   divClass="table-responsive table-card mb-3"
                      //   tableClass="align-middle table-nowrap"
                      //   theadClass="table-light"
                      //   handleContactClick={handleContactClicks}
                      //   isContactsFilter={true}
                      //   SearchPlaceholder="Search maintenance records..."
                      // />
                      <>
                        <div
                          className="d-flex p-2 justify-content-around align-items-center"
                          style={{ display: "block", flexWrap: "wrap" }}
                        >
                          {users?.map((item, key) => {
                            return (
                              <div
                                className="p-2 maintenance-card m-2"
                                style={{
                                  display: "inline-block",
                                  width: "22%",
                                  borderRadius: "10px",
                                }}
                                onClick={() => handleCardClick(item)}
                                key={key}
                              >
                                <div>
                                  <img
                                    src={item?.img}
                                    alt="car"
                                    className="img-fluid"
                                    style={{ objectFit: "contain" }}
                                  ></img>
                                </div>

                                <div className="text-center mb-2">
                                  <p className="text-muted fw-bolder">
                                    BMW M5 Competition 4.5 Turbo Charge
                                  </p>
                                </div>

                                <div className="text-center mt-2">
                                  <p className="text-muted">Maintenance Type</p>
                                </div>

                                <div
                                  className="d-flex justify-content-center gap-2 mb-5"
                                  style={{ flexWrap: "wrap" }}
                                >
                                  <div
                                    style={{
                                      borderRadius: "30px",
                                      width: "50%",
                                      color: "#8b3af8",
                                      backgroundColor: "#d2b7f3",
                                      border: "1px solid #8b3af8",
                                    }}
                                    className="p-1 text-center"
                                  >
                                    {item.type}
                                  </div>
                                  <div
                                    style={{
                                      borderRadius: "30px",
                                      width: "20%",
                                      color: "#00d084",
                                      backgroundColor: "#9fe0cf",
                                      border: "1px solid #00d084",
                                    }}
                                    className="p-1 text-center"
                                  >
                                    80%
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
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
                        style={{ overflow: "hidden", display: "none" }}
                      >
                        {/* Your content, image, or any other elements */}
                        <div className="text-center mt-5">
                          <p className="text-dark fw-bolder">
                            {!!isEdit
                              ? "Update Maintenance Service"
                              : "Add Maintenance Service"}
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
                                    Select Vehicle
                                  </p>

                                  <Select
                                    name="vehicle_id"
                                    value={vehicleOptions.find(function (e) {
                                      return (
                                        (!isEdit ? e.label : e.value) ===
                                        validation.values.vehicle_id
                                      );
                                    })}
                                    onChange={(e) =>
                                      validation.setFieldValue(
                                        "vehicle_id",
                                        e.value
                                      )
                                    }
                                    className="mb-0"
                                    options={vehicleOptions}
                                    id="taginput-choices"
                                  ></Select>
                                  <p style={{ color: "red" }} className="mt-2">
                                    {validation.errors.vehicle_id}
                                  </p>
                                </Col>

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
                                </Col>

                                <Col lg={12}>
                                  <div>
                                    <Label
                                      htmlFor="role_name"
                                      className="form-label"
                                    >
                                      Service Date
                                    </Label>
                                    <Input
                                      name="service_date"
                                      id="service_date"
                                      className="form-control"
                                      placeholder="Enter Service Name"
                                      type="date"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={
                                        validation.values.service_date || ""
                                      }
                                      invalid={
                                        validation.touched.service_date &&
                                        validation.errors.service_date
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.service_date &&
                                    validation.errors.service_date ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.service_date}
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
                                      Notes
                                    </Label>
                                    <Input
                                      name="notes"
                                      id="notes"
                                      className="form-control"
                                      placeholder="Enter Notes"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.notes || ""}
                                      invalid={
                                        validation.touched.notes &&
                                        validation.errors.notes
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.notes &&
                                    validation.errors.notes ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.notes}
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
                                      Total Cost Numeric
                                    </Label>
                                    <Input
                                      name="total_cost"
                                      id="total_cost"
                                      className="form-control"
                                      placeholder="Enter Total Cost"
                                      type="text"
                                      validate={{
                                        required: { value: true },
                                      }}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      value={validation.values.total_cost || ""}
                                      invalid={
                                        validation.touched.total_cost &&
                                        validation.errors.total_cost
                                          ? true
                                          : false
                                      }
                                    />
                                    {validation.touched.total_cost &&
                                    validation.errors.total_cost ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.total_cost}
                                      </FormFeedback>
                                    ) : null}
                                  </div>
                                </Col>
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
                                    borderRadius: "20px",
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
                                    borderRadius: "20px",
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
                  {/* <h6 className="text-muted text-uppercase fw-semibold mb-3">
                    Personal Information
                  </h6>
                  <p className="text-muted mb-4">
                    Hello, I'm {info.name || "Tonya Noble"}, The most effective objective is one
                    that is tailored to the job you are applying for. It states
                    what kind of career you are seeking, and what skills and
                    experiences.
                  </p> */}
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
                          Maintenance Records
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
                          src="https://static.vecteezy.com/system/resources/previews/017/087/972/original/ev-electric-car-service-center-inspection-inspector-auto-engineer-and-motor-technician-maintenance-and-repair-cost-isometric-isolated-illustration-vector.jpg"
                          alt="fuel"
                          width="160"
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
                        Maintenance records serve as a vital documentation tool,
                        capturing a detailed history of all maintenance
                        activities performed on equipment or assets. These
                        records facilitate proactive scheduling of future
                        maintenance, aid in troubleshooting, and ensure
                        compliance with safety and regulatory standards.
                        Accurate maintenance documentation enhances equipment
                        reliability, reduces downtime, and supports informed
                        decision-making for efficient resource allocation.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal
        isOpen={!!selectedUser}
        onRequestClose={closeModal}
        contentLabel="Maintenance Profile"
        size="xl"
        toggle={closeModal}
      >
        {selectedUser && (
          <div>
            <div className="text-center">
              <img src={selectedUser.img} alt="car"></img>
            </div>

            <div className="text-center d-flex justify-content-center">
              <div>
                <h5> BMW M5 Competition 4.5 Turbo Charge</h5>
              </div>
              <div>
                <VerticalDivider />
              </div>
              <div className="">
                <p
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "1px 5px 1px 5px",
                    borderRadius: "10px",
                  }}
                >
                  GHC 250,000.00
                </p>
              </div>
            </div>

            <div
              className="d-flex justify-content-center gap-2 mb-5 mt-4"
              style={{ flexWrap: "wrap" }}
            >
              <div
                style={{
                  borderRadius: "30px",
                  width: "50%",
                  color: "#8b3af8",
                  backgroundColor: "#d2b7f3",
                  border: "1px solid #8b3af8",
                }}
                className="p-1 text-center"
              >
                {selectedUser.type}
              </div>
              <div
                style={{
                  borderRadius: "30px",
                  width: "20%",
                  color: "#00d084",
                  backgroundColor: "#9fe0cf",
                  border: "1px solid #00d084",
                }}
                className="p-1 text-center"
              >
                80%
              </div>
            </div>

            <div className="text-center p-3 d-flex justify-content-around align-items-center">
              <div className="text-center">
                <div className="text-center fw-bolder">Repair Description</div>
                <p
                  style={{
                    border: "1px solid #e0e0e0",
                    width: "100%",
                    borderRadius: "15px",
                    backgroundColor: "#eceaeb",
                  }}
                  className="p-3 mt-3"
                >
                  Car need a new paint job with a set of fresh new tiers
                </p>
              </div>

              <div className="text-start">
                <div className="text-center fw-bolder">Mechanic Profile</div>
                <div className="text-start d-flex align-items-center justify-content-around gap-2">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCQSRJcWrFBiKbXHkiL-FgBk-vJpAxsO7KA&s"
                      alt="profile"
                      width={"80px"}
                      height={"80px"}
                      className="mt-3"
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    ></img>
                  </div>
                  <div style={{ lineHeight: "4px" }}>
                    <p className="text-start mt-3 fs-5 fw-lighter">
                      Mathias Lawson
                    </p>
                    <p className="text-start mt-3 text-muted fw-lighter">
                      Osu, Accra
                    </p>
                    <p className="text-start mt-3 text-muted fw-lighter">
                      Platform Rating : <b>97/100</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5 fw-bolder">Track Maintenance</div>
            <div>
              <Timeline />
            </div>

            <div className="text-end p-3">
              <button
                onClick={closeModal}
                style={{ backgroundColor: "white", border: "none" }}
                className="p-3"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default MaintenanceRecords;
