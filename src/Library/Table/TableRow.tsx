import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LinkButton from "../LinkButton/LinkButton";
interface LinkProps {
  data: any;
}
const TableRow = ({ data }: LinkProps): JSX.Element => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <tr>
            <td className="">{item.full_name}</td>
            <td className="">{item.mobile}</td>
            <td className="">{item.case_number}</td>
            <td className="">{item.group_survey_number}</td>
            <td className="">{item.village}</td>

            <td className="">{item.total_area}</td>
            <td className="">{item.created_date}</td>
            <td className="">
              <LinkButton LinkTo={`/dashboard/${item.mobile}`}>
                <Button
                  buttonStyleOutline
                  buttonStyleType={"primary"}
                  buttonText="View"
                ></Button>
              </LinkButton>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
