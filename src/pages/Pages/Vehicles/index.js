import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { NavLink } from "reactstrap";
import { isEmpty } from "lodash";
import * as moment from "moment";
import classnames from "classnames";
import "./index.css";

// Import Images

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
  Button,
  TabContent,
  TabPane,
  NavItem,
  Nav,
} from "reactstrap";
import Select from "react-select";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SaveLoader from "../../../Components/Common/SaveLoader";
import DeleteModal from "../../../Components/Common/DeleteModal";


//Import actions
import {
//   getStockAction,
//   addNewStock,
//   updateStock,
//   getProductAction,
//   deleteContact as onDeleteContact,
//   getShopAction,
//   transferProductsRequest,
//   viewTransferHistory,
//   consignmentItems,
//   receiveConsignment,
//   deleteTransferProducts,
//   getCreditHistoryRequest,
//   createCreditRequest,
} from "../../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import TableContainer from "../../../Components/Common/TableContainer";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import Loader from "../../../Components/Common/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Export Modal
import ExportCSVModal from "../../../Components/Common/ExportCSVModal";
import VehicleMake from "./VehicleMake";
import VehicleModels from "./VehicleModels";
import VehicleTypes from "./VehicleTypes";
import FuelTypes from "./FuelTypes";
import Features from "./Features";
import AssignFeature from "./AssignFeature";
import PricingTiers from "./PricingTiers";
import Inventory from "./Inventory";
import VehiclePricing from "./VehiclePricing";
import VehicleTrades from "./VehicleTrades";
import VehicleRepairs from "./VehicleRepairs";
// import Additions from "./Additions";
// import Deduction from "./Deduction";
// import Overtime from "./Overtime";
// import Bank from "./Bank";
// import BankAccounts from "./BankAccounts";
// import GroupBand from "./GroupBand";
// import BandAllowance from "./BandAllowance";
// import BandDeduction from "./BandDeduction";

const Vehicles = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [status, setStatus] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 5);

    // Create a default end date as 1 month from the current startDate
    const defaultEndDate = new Date(currentDate);
    defaultEndDate.setMonth(currentDate.getMonth() + 5);

    // Format the dates as "YYYY-MM-DD"
    setStartDate(formatDate(currentDate));
    setEndDate(formatDate(defaultEndDate));
  }, []);

  // Function to format a Date object as "YYYY-MM-DD"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dispatch = useDispatch();
  const {
    isStockCreated,

    isContactSuccess,

    updateloadding,
    saveloadding,
    // product,
  } = useSelector((state) => ({
    // isStockCreated: state.StockReducer.isStockCreated,
    // isContactSuccess: state.StockReducer.isContactSuccess,

    // updateloadding: state.StockReducer.updateloadding,
    // saveloadding: state.StockReducer.saveloadding,
    // product: state.Product.product,
  }));

  const {
    credit,
    loading,
    error,
    transferHistoryData,
    transferHistoryLoading,
  } = useSelector((state) => ({
    // credit: state.Product.getCreditHistoryData,
    // loading: state.Product.getCreditHistoryLoading,
    // error: state.Product.getCreditHistoryError,
    // shopsloading: state.Shops.loading,
    // shopsupdateloadding: state.Shops.updateloadding,
    // shopsaveloadding: state.Shops.saveloadding,
    // transferHistoryData: state.Shops.transferHistoryData,
    // transferHistoryLoading: state.Shops.transferHistoryLoading,
    // userInfo: state.Login.userInfo,
  }));

  useEffect(() => {
    // dispatch(
    // //   getCreditHistoryRequest({
    // //     start: startDate,
    // //     end: endDate,
    // //     status: status,
    // //   })
    // );
  }, [dispatch, startDate, endDate, status]);

  const product = []

  const [isEdit, setIsEdit] = useState(false);
  const [contact, setContact] = useState([]);

  //delete Conatct
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);
  const [dropType, setDType] = useState(null);
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
    console.log("del");
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

  const navigate = useNavigate();

  const statOptions = [
    { value: true, label: "Show Paid Credits" },
    { value: false, label: "Show Unpaid Credits" },
  ];

  const handleStatChange = (selectedOption) => {
    setStatus(selectedOption.value);
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
      destination_outlet_id: (contact && contact.destination_outlet_id) || "",
      notes: (contact && contact.notes) || "",
      reference: (contact && contact.reference) || "",
      transfer_from: (contact && contact.transfer_form) || "",
      source_outlet_id: (contact && contact.transfer_form) || "",
    },
    validationSchema: Yup.object({
      destination_outlet_id: Yup.string().required("Please select outlet"),
      notes: Yup.string().required("Please enter notes"),
      reference: Yup.string().required("Please enter a refrence"),
      transfer_from: Yup.string().required("Please transfer Origin"),
      // source_outlet_id: Yup.string().required("Please add transfer source"),
      source_outlet_id: Yup.string().when("destination_outlet_id", {
        is: "outlet", // Set your condition here
        then: Yup.string().required("Please add transfer source"),
      }),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updatePayload = {
          product_id: contact.id,
          prod_qty: values.qty,
        };
        // update Contact
        // dispatch(updateStock(updatePayload));
        validation.resetForm();
      } else {
        // save new Contact
        // dispatch(transferProductsRequest(values));
        // navigate("/create-consignment");
        validation.resetForm();
      }
      toggle();
    },
  });

  // Update Data
  const handleContactClick = useCallback(
    (arg) => {
      const contact = arg;
      console.log(contact);
      setContact({
        id: contact.product_id,
        qty: contact.prod_qty,
      });

      setIsEdit(true);
      // toggle();
    },
    [toggle]
  );

  console.log(contact);

  // Node API
  useEffect(() => {
    if (isStockCreated) {
      setContact(null);
     
     
    }
  }, [dispatch, isStockCreated]);

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

  console.log(validation.values.transfer_from);

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".contactCheckBox:checked");
    ele.length > 0
      ? setIsMultiDeleteButton(true)
      : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  // Data for the three modals
  const modal1Data = "Data for Modal 1";
  const modal2Data = "Data for Modal 2";
  const modal3Data = "Data for Modal 3";

  const toggleView = (contactData) => {
    // dispatch(consignmentItems({ transfer_id: contactData?.transfer_id }));
  };

  <DeleteModal
    show={deleteModal}
    onDeleteClick={handleDeleteContact}
    onCloseClick={() => setDeleteModal(false)}
  />;

  const [tag, setTag] = useState([]);
  const [assignTag, setAssignTag] = useState([]);

  // SideBar Contact Deatail
  const [info, setInfo] = useState([]);

  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  const dropOptions = [
    { value: "product", label: "Product" },
    { value: "options", label: "Product Options" },
  ];

  const fromOptions = [
    { value: "outlet", label: "Outlet" },
    { value: "warehouse", label: "Warehouse" },
  ];

  const statusOptions = [
    { value: "reject", label: "Reject" },
    { value: "accept", label: "Accept" },
  ];

  let Productoptions = product?.map(function (item) {
    return { value: item.product_id, label: item.prod_name };
  });

  const shops = [];

  let shopOptions = shops?.map(function (item) {
    return { value: item.outlet_id, label: item.outlet_name };
  });

  document.title = "Vehicles | Automobile - ADMINUI";

  const [selectedProducts, setSelectedProducts] = useState([]);

  const { consigItem, consigItemsLoading } = useSelector((state) => ({
    // consigItem: state.Shops.consigItems,
    // consigItemsLoading: state.Shops.consignmentItemsLoading,
  }));

  const handleProductSelection = (selectedProduct) => {
    const existingProductIndex = selectedProducts.findIndex(
      (product) => product.value === selectedProduct.value
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the list, remove it
      const updatedProducts = selectedProducts.filter(
        (product) => product.value !== selectedProduct.value
      );
      setSelectedProducts(updatedProducts);
    } else {
      // Otherwise, add the product to the list
      setSelectedProducts([...selectedProducts, selectedProduct]);
    }
  };

  const handleQtyEdit = (product, newQty) => {
    // Find the product in the selectedProducts list and update its qty
    const updatedProducts = selectedProducts.map((p) => {
      if (p.value === product.value) {
        p.prod_qty = newQty;
      }
      return p;
    });

    setSelectedProducts(updatedProducts);
  };

  const handleCosPriceEdit = (product, newCosPrice) => {
    // Find the product in the selectedProducts list and update its consignment price
    const updatedProducts = selectedProducts.map((p) => {
      if (p.value === product.value) {
        p.cos_price = newCosPrice;
      }
      return p;
    });

    setSelectedProducts(updatedProducts);
  };

  const handleProdPriceEdit = (product, newProdPrice) => {
    const updatedProducts = selectedProducts.map((p) => {
      if (p.value === product.value) {
        p.prod_price = newProdPrice;
      }
      return p;
    });

    setSelectedProducts(updatedProducts);
  };

  const [id, setId] = useState("");

  useEffect(() => {
    setId(info.transfer_id);
  }, [info.transfer_id]);

  console.log(id);

  const [formData, setFormData] = useState({
    transfer_id: "",
    remarks: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      transfer_id: info.transfer_id,
      [name]: value,
    });
  };

  const [activeTab, setActiveTab] = useState("vehiclemake");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <ExportCSVModal
          show={isExportCSV}
          onCloseClick={() => setIsExportCSV(false)}
          data={transferHistoryData}
        />

        {/* <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteContact}
          onCloseClick={() => setDeleteModal(false)}
        /> */}

        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            deleteMultiple();
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />

        <BreadCrumb title="VEHICLES" pageTitle="Vehicles" />

        <Row>
          <Card style={{backgroundColor: '#f2f2f7', boxShadow: 'none'}}>
            <CardBody style={{backgroundColor: '#f2f2f7', boxShadow: 'none'}}>
              <Col xl={12}>
                <div className="">
                  <Nav tabs style={{backgroundColor: 'white', borderRadius: '40px', overflow: 'hidden', border: '1px solid #e0e0e0'}} className="p-2">
                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehiclemake",
                        })}
                        onClick={() => toggleTab("vehiclemake")}
                      >
                        Vehicle Make
                      </NavLink>
                    </NavItem>
                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehiclemodel",
                        })}
                        onClick={() => toggleTab("vehiclemodel")}
                      >
                        Vehicle Models
                      </NavLink>
                    </NavItem>
                    <NavItem className="custom-tab">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehicletypes",
                        })}
                        onClick={() => toggleTab("vehicletypes")}
                      >
                        Vehicle Types
                      </NavLink>
                    </NavItem>

                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "fueltypes",
                        })}
                        onClick={() => toggleTab("fueltypes")}
                      >
                        Fuel Types
                      </NavLink>
                    </NavItem>
                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "features",
                        })}
                        onClick={() => toggleTab("features")}
                      >
                        Features
                      </NavLink>
                    </NavItem>
                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "assignfeature",
                        })}
                        onClick={() => toggleTab("assignfeature")}
                      >
                        Assign Features
                      </NavLink>
                    </NavItem>

                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "price",
                        })}
                        onClick={() => toggleTab("price")}
                      >
                        Pricing Tiers
                      </NavLink>
                    </NavItem>
                    {/* <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "inventory",
                        })}
                        onClick={() => toggleTab("inventory")}
                      >
                        Inventory
                      </NavLink>
                    </NavItem> */}
                    <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehiclepricing",
                        })}
                        onClick={() => toggleTab("vehiclepricing")}
                      >
                        Vehicle Pricing
                      </NavLink>
                    </NavItem>
                    {/* <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehicletrades",
                        })}
                        onClick={() => toggleTab("vehicletrades")}
                      >
                        Vehicle Trades
                      </NavLink>
                    </NavItem> */}
                    {/* <NavItem className="">
                      <NavLink
                        className={classnames("custom-tab", {
                          active: activeTab === "vehiclerepairs",
                        })}
                        onClick={() => toggleTab("vehiclerepairs")}
                      >
                        Vehicle Repairs
                      </NavLink>
                    </NavItem> */}
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="vehiclemake">
                      <div className="tab-content">
                      <VehicleMake />
                      </div>
                    </TabPane>

                    <TabPane tabId="vehiclemodel">
                      <div className="tab-content">
                        <VehicleModels />
                      </div>
                    </TabPane>

                    <TabPane tabId="vehicletypes">
                      <div className="tab-content">
                       <VehicleTypes />
                      </div>
                    </TabPane>
                    <TabPane tabId="fueltypes">
                      <div className="tab-content">
                       <FuelTypes />
                      </div>
                    </TabPane>

                    <TabPane tabId="features">
                      <div className="tab-content">
                      <Features />
                      </div>
                    </TabPane>

                    <TabPane tabId="assignfeature">
                      <div className="tab-content">
                      <AssignFeature />
                      </div>
                    </TabPane>
                    <TabPane tabId="price">
                      <div className="tab-content">
                       <PricingTiers />
                      </div>
                    </TabPane>
                    <TabPane tabId="inventory">
                      <div className="tab-content">
                       <Inventory />
                      </div>
                    </TabPane>
                    <TabPane tabId="vehiclepricing">
                      <div className="tab-content">
                       <VehiclePricing />
                      </div>
                    </TabPane>
                    <TabPane tabId="vehicletrades">
                      <div className="tab-content">
                       <VehicleTrades />
                      </div>
                    </TabPane>
                    <TabPane tabId="vehiclerepairs">
                      <div className="tab-content">
                       <VehicleRepairs />
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </CardBody>
          </Card>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Vehicles;
