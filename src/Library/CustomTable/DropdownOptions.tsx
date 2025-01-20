import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
type TableDownloadProps = {
  dropdown: any;
  data: any;
  dataToParent: any;
};
const SupplierMasterDashboard = ({
  dropdown,
  data,
  dataToParent,
}: TableDownloadProps): JSX.Element => {
  const [dropDownData, setDropDownData] = useState({});
  const dropdownChange = (e: any) => {
    if (e.target.value) {
      setDropDownData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setDropDownData({});
    }
  };

  useEffect(() => {
    if (dropDownData && dropDownData !== null) {
      let filterdata = findByTemplate(data, dropDownData);
      dataToParent(filterdata);
    }
  }, [dropDownData]);

  const findByTemplate = (allPersons: any, template: any) => {
    // @ts-ignore:next-line
    return allPersons.filter((person) => {
      return Object.keys(template).every(
        (propertyName) => person[propertyName] === template[propertyName]
      );
    });
  };
  return (
    <>
      {dropdown &&
        dropdown.map((item: any) => {
          return (
            <div className="ml-3">
              <select
                className="form-control"
                onChange={dropdownChange}
                onClick={() => dropdownChange}
                name={item.name}
              >
                <option selected value="">
                  --------Select {item.name} --------
                </option>
                {item.value &&
                  item.value.map((option: any) => {
                    return (
                      <option
                        selected={
                          dropDownData !== null
                            ? // @ts-ignore:next-line
                              dropDownData[item?.name]
                              ? true
                              : false
                            : false
                        }
                        value={option}
                      >
                        {option}
                      </option>
                    );
                  })}
              </select>
            </div>
          );
        })}
    </>
  );
};

export default SupplierMasterDashboard;
