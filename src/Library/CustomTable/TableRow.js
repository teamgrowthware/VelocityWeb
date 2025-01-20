import react, { useState, useMemo, useEffect } from "react";

const TableRow = ({ rowData, index, showCells }) => {
  return (
    <tr key={index}>
      {showCells && showCells?.id && <td>{rowData.id}</td>}
      {showCells && showCells?.first_name && <td>{rowData.first_name}</td>}
      {showCells && showCells?.last_name && <td>{rowData.last_name}</td>}
      {showCells && showCells?.email && <td>{rowData.email}</td>}
      {showCells && showCells?.gender && <td>{rowData.gender}</td>}
      {showCells && showCells?.ip_address && <td>{rowData.ip_address}</td>}
      {showCells && showCells?.mobile && <td>{rowData.mobile}</td>}
      {showCells && showCells?.case_number && <td>{rowData.case_number}</td>}
      {showCells && showCells?.status && <td>{rowData.status}</td>}
      {showCells && showCells?.city && <td>{rowData.city}</td>}
    </tr>
  );
};

export default TableRow;
