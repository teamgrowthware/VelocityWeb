import moment from 'moment';
import React, { Component, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
interface InputProps {
  minDate?: Date;
  inputText?: string | null;
  inputType?: "text" | "number" | "email" | "password" | "url" | "textarea";
  className?: string;
  icon?: string;
  children?: any;
  placeholder?: string;
  inputName: string;
  labelName?: string;
  inputSubType?: "incrementer";
  id?: string;
  value?: string | number | undefined;
  required?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  customValidationMsg?: string;
  onChangeCallback?: any;
  onChangeSingleCallback?: any;
  suffix?: string;
  col?: "1" | "2" | "3" | "4" | "5" | "6" | "9" | "10" | "11" | "12";
  isFormSubmitted?: boolean;
  readonly?: boolean;
  anyDate?: boolean;
  maxDate?: any
  disabledWeekend?: boolean;
}
const DatePickerComp = ({
  minDate,
  maxDate,
  inputText = null,
  className,
  children,
  icon,
  placeholder = "",
  inputName,
  labelName,
  id,
  value,
  required = false,
  min,
  max,
  maxLength,
  minLength,
  disabled,
  customValidationMsg,
  onChangeCallback,
  onChangeSingleCallback,
  suffix,
  col = "12",
  inputSubType,
  isFormSubmitted = false,
  readonly = false,
  anyDate = false,
  disabledWeekend = true
}: InputProps): JSX.Element => {
  const [startDate, setStartDate] = useState(minDate);
  const [minDateState, setMinDateState] = useState<any>()
  const handleChange = (date: any) => {
    let inputData = {
      key: inputName,
      value: date,
    };
    let single = { [inputName]: date };
    setStartDate(date)
    onChangeCallback?.(inputData);
    onChangeSingleCallback?.(single);
  }

  // useEffect(() => {
  //   let inputData = {
  //     key: inputName,
  //     value: minDate,
  //   };
  //   let single = { [inputName]: minDate };
  //   onChangeSingleCallback?.(single);
  // }, [inputName, minDate])

  useEffect(() => {
    if (value) {
      setStartDate(value as any);
    }
  }, [value]);

  useEffect(() => {
    console.log("minDate", minDate)
    if (minDate) {
      setMinDateState(minDate)
      setStartDate(minDate)
    } else {
      if (anyDate) {
        setMinDateState(new Date())
        setStartDate(new Date())
      } else {
        setMinDateState(new Date('01/01/1950'))
        setStartDate(new Date())
      }

    }
  }, [anyDate, minDate])

  const isWeekday = (date: any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  console.log("{[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]", [{ start: new Date(), end: new Date() }])

  const disabledDates = [{ start: new Date(), end: new Date() }]

  return (
    <>
      <div className={`mb-3 col-md-${col}`}>
        {labelName && (
          <label>
            {labelName} {required ? <span className="red">*</span> : ""}
          </label>
        )}
        <div
          className={`position-relative input-group ${className}`}
        >
          <DatePicker
            selected={value ? new Date(value) : new Date()}
            dateFormat="dd/MM/yyyy"
            onChange={handleChange}
            disabled={disabled}
            readOnly={readonly}
            showTimeSelect={false}
            className="form-control"
            minDate={minDateState}
            maxDate={maxDate}
            closeOnScroll={true}
            excludeDateIntervals={disabledDates}
            filterDate={disabledWeekend ? isWeekday : undefined}
          />
          {icon && <span className={`icon ${icon}`}></span>}
        </div>
        {children && children}
      </div>
    </>
  )
}
export default DatePickerComp;