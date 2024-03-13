import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect
} from "react-table";
import { Table, Row, Col, Button, Input, CardBody } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import './search.css'
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  // ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter
} from "../../Components/Common/GlobalSearchFilter";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isProductsFilter,
  isLeadsFilter,
  SearchPlaceholder
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className=" border-end-0 border-start-0" style={{backgroundColor: ''}}>
        <form>
          <Row className="g-3">
            <Col>
              <div className={(isProductsFilter || isContactsFilter || isCompaniesFilter || isNFTRankingFilter) ? "search-box me-2 mb-2 d-inline-block" : "search-box me-2 mb-2 d-inline-block col-12"}>
                <input
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  // id="search-bar-0"
                  type="text"
                  className="form-control  /"
                  placeholder={SearchPlaceholder}
                  value={value || ""}
                 style={{borderRadius: '15px'}}
                />
                <i className="bx bx-search-alt search-icon"></i>
              </div>
            </Col>
            {isProductsFilter && (
              <ProductsGlobalFilter />
            )}
            {isCustomerFilter && (
              <CustomersGlobalFilter />
            )}
            {isOrderFilter && (
              <OrderGlobalFilter />
            )}
            {/* {isContactsFilter && (
              <ContactsGlobalFilter />
            )} */}
            {isCompaniesFilter && (
              <CompaniesGlobalFilter />
            )}
            {isLeadsFilter && (
              <LeadsGlobalFilter />
            )}
            {isCryptoOrdersFilter && (
              <CryptoOrdersGlobalFilter />
            )}
            {isInvoiceListFilter && (
              <InvoiceListGlobalSearch />
            )}
            {isTicketsListFilter && (
              <TicketsListGlobalFilter />
            )}
            {isNFTRankingFilter && (
              <NFTRankingGlobalFilter />
            )}
            {isTaskListFilter && (
              <TaskListGlobalFilter />
            )}
          </Row>
        </form>
      </CardBody>

    </React.Fragment>
  );
}


const TableContainer = ({
  columns,
  data,
  isGlobalSearch,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0, pageSize: customPageSize, selectedRowIds: 0, sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " " : "") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };
  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <Fragment>
     <div style={{backgroundColor: 'white', borderRadius: '10px'}} className="p-5">
     <Row className="mb-3">
        {isGlobalSearch && (
          <Col md={1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isProductsFilter={isProductsFilter}
            isCustomerFilter={isCustomerFilter}
            isOrderFilter={isOrderFilter}
            isContactsFilter={isContactsFilter}
            isCompaniesFilter={isCompaniesFilter}
            isLeadsFilter={isLeadsFilter}
            isCryptoOrdersFilter={isCryptoOrdersFilter}
            isInvoiceListFilter={isInvoiceListFilter}
            isTicketsListFilter={isTicketsListFilter}
            isNFTRankingFilter={isNFTRankingFilter}
            isTaskListFilter={isTaskListFilter}
            SearchPlaceholder={SearchPlaceholder}
          />
        )}
        {isAddOptions && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="rounded-pill  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="rounded-pill mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>


      <div className={divClass}>
        <Table hover {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup) => (
              <tr className={trClass} key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} className={thClass} {...column.getSortByToggleProps()} style={{backgroundColor: 'transparent'}}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr style={{backgroundColor: 'transparent', borderRadius: '30px'}}>
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()} >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Row className="justify-content-md-end justify-content-center align-items-center p-2">
        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button
              color="primary"
              onClick={previousPage}
              disabled={!canPreviousPage}
              style={{backgroundColor: 'transparent', color: 'black', border: 'none', boxShadow: 'none'}} 
            >
               <i className="bx bx-caret-left"></i>
            </Button>
          </div>
        </Col>
        <Col className="col-md-auto d-none d-md-block">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col className="col-md-auto">
          <Input
            type="number"
            min={1}
            style={{ width: 100 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
            className="w-100"
          />
        </Col>

        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button style={{backgroundColor: 'transparent', color: 'black', border: 'none', boxShadow: 'none'}} onClick={nextPage} disabled={!canNextPage}>
              <i className="bx bx-caret-right"></i>
            </Button>
          </div>
        </Col>
      </Row>
     </div>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;