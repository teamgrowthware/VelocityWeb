import React, { useEffect, useState, useMemo, useCallback } from "react";
import CustomTooltip from "../Tooltip/Tippy";
import Button from "../Button/Button";
import { DownloadExcel, donwloadOptions } from "../Utility/Utility";

import moment from "moment";


const TableDownload = ({
  data,
  tableTitle,
  sortingData,
  disabled = false,
  downloadKeys
}) => {
  const downloadCSV = useCallback((data) => {
    if (downloadKeys?.length > 0) {
      const CSVData = []
      data?.map((item2) => {
        let oneObj = {}
        downloadKeys?.map((downloadKey) => {
          Object.entries(item2).map(([key, value]) => {
            oneObj[downloadKey?.display] = downloadKey?.type === 'date' ? moment(item2?.[downloadKey?.name]).format("DD/MM/YYYY") : item2?.[downloadKey?.name]
          })
        })
        CSVData.push(oneObj)
      })
      console.log("CSVData", CSVData)
      // exportToExcel(CSVData, tableTitle)
    }
    else {
      // exportToExcel(data, tableTitle)
    }

  }, [downloadKeys])

  return (
    <div className="ml-3">
      <div className="dropdown">
        <CustomTooltip
          title={"title"}
          position={"bottom"}
          disabled={disabled}
          trigger={"click"}
          content={
            <ul className="dropdownOption">
              <li className="changeCase">
                <Button
                  icon="download_for_offline"
                  iconPosition="left"
                  onClick={() => downloadCSV(data)}
                  buttonText={'Download'}
                ></Button>
              </li>
            </ul>
          }
        >
          <button
            disabled={disabled}
            className="btn btn-outline-primary dropdown-toggle"
          >
            <span className="material-symbols-outlined">
              download_for_offline
            </span>
          </button>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default TableDownload;
