import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToasterProps {
  message: string;
}

const Toaster = ({ message }: ToasterProps): JSX.Element => {
  const notify = () => toast(message);
  return <></>;
};
export default Toaster;
