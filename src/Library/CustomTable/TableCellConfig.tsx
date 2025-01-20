import React, { useEffect, useState, useMemo } from "react";
import CustomTooltip from "../Tooltip/Tippy";
import Button from "../Button/Button";
import { replaceUnderscore } from "../Utility/Utility";

interface TableDownloadProps {
  checkoxValue: any;
  data: any;
  cellConfig: any;
  disabled: boolean;
}
const TableDownload = ({
  checkoxValue,
  data,
  cellConfig,
  disabled = false,
}: TableDownloadProps): JSX.Element => {
  return (
    <div className="ml-3">
      <div className="dropdown">
        <CustomTooltip
          title={"title"}
          position={"bottom"}
          trigger={"click"}
          disabled={disabled}
          content={
            <ul className="dropdownOption">
              {data[0] &&
                Object.keys(data[0]).map((item, i) => (
                  <li className="changeCase">
                    <input
                      name={item}
                      onChange={checkoxValue}
                      checked={cellConfig[item]}
                      type="checkbox"
                      disabled={i === 0}
                    />
                    {replaceUnderscore(item)}
                  </li>
                ))}
            </ul>
          }
        >
          <Button
            disabled={disabled}
            buttonStyleOutline={true}
            buttonStyleType="primary"
          >
            <i className="fa fa-list"></i>
          </Button>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default TableDownload;
