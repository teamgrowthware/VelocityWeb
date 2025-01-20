import React, { useEffect, useState, useMemo } from "react";
import { replaceUnderscore } from '../Utility/Utility';

const HeaderCol = ({ cellConfig, item, sortDefault, sortCallback }) => {
  const [sortState, setSortState] = useState(sortDefault);
  const sortBy = (name) => {
    const sorting = {
      name: name,
      isAsc: !sortState.isAsc,
    };
    setSortState(sorting);
    sortCallback(sorting);
  };
  return (
    <>
      {cellConfig?.[item.name] ? (
        <th
          nowrap
          className={`nowrap ${sortState.name === item.name ? "active" : ''} ${item.sort ? "sorting" : ''
            }`}
          onClick={() => (item.sort ? sortBy(item.name) : '')}
          style={{ textTransform: 'capitalize' }}
        >
          {replaceUnderscore(item.display)}{" "}
          {item.sort
            ? sortState.name === item.name
              ? sortState.isAsc
                ? <i className={`mr-1 fa fa-angle-up`}></i>
                : <i className={`mr-1 fa fa-angle-down`}></i>
              : <i className={`mr-1 fa fa-angle-up`}></i>
            : ""}
        </th>
      ) :
        <th
          className={`${sortState.name === item.name ? "active" : ''} ${item.sort ? "sorting" : ''
            }`}
          onClick={() => (item.sort ? sortBy(item.name) : '')}
          style={{ textTransform: 'capitalize' }}
        >
          {replaceUnderscore(item.display)}{" "}
          {item.sort
            ? sortState.name === item.name
              ? sortState.isAsc
                ? <i className={`mr-1 fa fa-angle-up`}></i>
                : <i className={`mr-1 fa fa-angle-down`}></i>
              : <i className={`mr-1 fa fa-angle-up`}></i>
            : ""}
        </th>
      }
    </>
  );
};

export default HeaderCol;
