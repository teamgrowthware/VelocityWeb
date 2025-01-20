import React, { useEffect, useState, useMemo } from "react";

interface loaderProps {
  columns?: any;
  row?: any;
  loaderType?: string
}
const Loader = ({ columns, row = "5", loaderType = 'TableLoader' }: loaderProps): JSX.Element => {
  return (
    <>
      {loaderType === 'TableLoader' ?
        Array.from(Array(columns).keys()).map((i) => {
          return (
            <tr className="loader">
              {Array.from(Array(columns).keys()).map((i) => {
                return (
                  <td>
                    <span></span>
                  </td>
                );
              })}
            </tr>
          );
        }) :
        <div className="d-flex justify-content-center">
          <div className="loaderWrapper">
            <span className="loaderDM"></span>
          </div>
        </div>}
    </>
  );
};

export default Loader;
