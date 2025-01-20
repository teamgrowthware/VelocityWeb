/* eslint-disable no-lone-blocks */
import React, { useCallback, useEffect, useState } from "react";
import HeaderCol from "./HeaderCol";
import Pagination from "./TablePagination";
import Input from "../Input/Input";
import TableCellConfig from './TableCellConfig';
import TableDownload from "./TableDownload";
import DropdownOptions from './DropdownOptions'
import Loader from '../Loader/Loader'
import { Button } from "../Module";
import Filters from "../Filter/Filter";
const CustomTable = ({
  header,
  sortState,
  data,
  sortDefault,
  tableTitle = '',
  dropdown,
  children,
  showCellCallback,
  isLoading,
  tableSubTitle = '',
  search_bar = true,
  showHeader = true,
  downloadKeys = [],
  filter = [],
  sidebarFilterData = (data),
  headerRight = <></>
}) => {
  const [cellConfig, setCellConfig] = useState({});
  const [search, setSearch] = useState({});
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  console.log("tableData", isLoading, tableData, data, filterData)
  const [hideCellDropdown, setHideCellDropdown] = useState(false);
  const [sort, setSort] = useState(sortDefault);
  // const [loading, setLoading] = useState(isLoading);
  const sortKey = sort?.name;
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const checkoxValue = (e) => {
    setCellConfig((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    setTableData([])
    setFilterData([])
    if (isLoading) {
      console.log("CustomTable.js data", data)
      setTableData(data)
      setFilterData(data)
      {
        data && data.length !== 0 &&
          Object.keys(data?.[0]).map((item) => {
            return (
              setCellConfig((prevState) => ({
                ...prevState,
                [item]: true,
              }))
            )
          });
      }
    }
  }, [data, isLoading]);

  useEffect(() => {
    showCellCallback(cellConfig);
  }, [cellConfig, showCellCallback]);

  const SearchOnChange = (e) => {

    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (isLoading) {
      if (search && search.length !== 0) {
        console.log("search useEffect", search)
        let search_key = search.toString().toLowerCase()
        console.log("search useEffect filterData", filterData)
        console.log("search useEffect data", data)
        let res = [];
        if (filterData.length !== 0) {
          data?.filter((obj) => {
            return (
              Object.keys(obj)?.forEach((key) => {
                if (obj[key]?.toString()?.toLowerCase().indexOf(search_key) !== -1) {
                  res.push(obj);
                }
              }))
          });
          const uniq = new Set(res.map(e => JSON.stringify(e)));
          const res1 = Array.from(uniq).map(e => JSON.parse(e));
          console.log("search useEffect res1", res1)
          if (res1.length === 0) {
            setFilterData([]);
          } else {
            setFilterData(res1);
          }
        }
      } else {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const currentTableData = data?.slice(firstPageIndex, lastPageIndex);
        setTableData(currentTableData);
        setFilterData(data)

      }
    }
  }, [filterData, search, isLoading, data, currentPage, PageSize]);

  const showCell = () => {
    setHideCellDropdown(!hideCellDropdown);
  };

  const sortCallback = (data) => {
    setSort(data);
    setCurrentPage(1)
  };

  useEffect(() => {
    if (isLoading) {
      if (filterData.length !== 0 && tableData !== 0) {
        console.log("filterData.sort", filterData)
        if (
          filterData &&
          sortKey &&
          sortKey !== undefined &&
          filterData !== null &&
          filterData.length > 0
        ) {
          let newArr;
          if (sort.isAsc) {
            if (typeof filterData[0][sortKey] === "number") {
              newArr = filterData?.sort((a, b) => b[sortKey] - a[sortKey]);
            } else {
              newArr = filterData?.sort((a, b) =>
                a[sortKey].localeCompare(b[sortKey])
              );
            }
          } else {
            if (typeof filterData[0][sortKey] === "number") {
              newArr = filterData?.sort((a, b) => a[sortKey] - b[sortKey]);
            } else {
              newArr = filterData?.sort((a, b) =>
                b[sortKey]?.localeCompare(a[sortKey])
              );
            }
          }
          setFilterData(newArr);
          const firstPageIndex = (currentPage - 1) * PageSize;
          const lastPageIndex = firstPageIndex + PageSize;
          const currentTableData = filterData?.slice(firstPageIndex, lastPageIndex);
          setTableData(currentTableData);
        }
      }
    }
  }, [sort, sortKey, currentPage, PageSize, filterData, isLoading]);

  useEffect(() => {
    if (isLoading) {
      if (filterData.length !== 0 && tableData !== 0) {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const currentTableData = filterData?.slice(firstPageIndex, lastPageIndex);
        setTableData(currentTableData);
        // setLoading(true)
      } else {
        setTableData([]);
      }
    }
  }, [filterData, PageSize, currentPage, isLoading])

  const dataToParent = (data) => {
    if (isLoading) {
      setFilterData(data);
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      const currentTableData = data?.slice(firstPageIndex, lastPageIndex);
      setTableData(currentTableData);
      setCurrentPage(1)
    }
  }

  const onChangeSingleCallback = (data) => {
    setSearch(data?.search_key);
  };

  return (
    <div className="">
      <div className="row align-content-end justify-content-start">
        {tableTitle && (
          <div className="col-md-7">
            <h4 class="card-title">{tableTitle}</h4>
            {tableSubTitle && <p>{tableSubTitle}</p>}
          </div>
        )}

        {showHeader &&
          <div className="col-md-5 customTableSearch">
            <div className="d-flex justify-content-end">
              <div className="ml-3 mr-3">
                {headerRight && headerRight}
                {search_bar &&
                  <Input
                    inputName="search_key"
                    inputType="text"
                    placeholder={`Search`}
                    icon={"search"}
                    onChangeSingleCallback={onChangeSingleCallback}
                    col="12"
                  />
                }
              </div>

              {/* <DropdownOptions
                dropdown={dropdown}
                data={data}
                dataToParent={dataToParent}
              />

              <TableCellConfig
                checkoxValue={checkoxValue}
                data={data}
                cellConfig={cellConfig}
                disabled={data.length === 0}
              />
*/}
              {filter?.length > 0 &&
                <Filters
                  sidebarFilterData={sidebarFilterData}
                  filter={filter}></Filters>
              }

              {/* {downloadKeys?.length !== 0 &&
                <TableDownload
                  data={data}
                  tableTitle={tableTitle}
                  sortingData={filterData}
                  disabled={data.length === 0}
                  downloadKeys={downloadKeys}
                />
              } */}
            </div>
          </div>
        }
      </div>
      <div className="table-responsive">
        <table className={`table ${tableData.length === 0 ? 'mb-0' : ''}  ${isLoading && 'table-hover'}`}>
          <thead className="">
            <tr>
              {header &&
                header.map((item) => {
                  return (
                    <>
                      <HeaderCol
                        sortState={sortState}
                        cellConfig={cellConfig}
                        sortDefault={sortDefault}
                        item={item}
                        sortCallback={sortCallback}
                      ></HeaderCol>
                    </>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              <Loader
                columns={header.length}
              ></Loader>}
            {isLoading &&
              filterData?.map((rowData, index) => {
                return (
                  <React.Fragment>
                    {children &&
                      children({
                        rowData,
                        index,
                      })}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
        {isLoading && tableData.length === 0 ?
          <div className="noDataFound">
            No {tableTitle ? tableTitle : 'data'} found
          </div> : ''}
      </div>
      {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filterData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
    </div>
  );
};

export default CustomTable;
