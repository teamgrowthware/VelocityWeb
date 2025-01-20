import React, { useEffect, useState, useMemo } from "react";

interface noDataFoundProps {
    primaryText?: any;
    secondaryText?: any;
}
const NoDataFound = ({
    primaryText = 'No Data Found',
    secondaryText }: noDataFoundProps): JSX.Element => {
    return (
        <div className="d-flex justify-content-center">
            <div className="noDataFound">
                <h3>{primaryText}</h3>
                {secondaryText && <p>{secondaryText}</p>}
            </div>
        </div>
    );
};

export default NoDataFound;
