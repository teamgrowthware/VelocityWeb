// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import "react-dates/initialize";
// import {
//   DateRangePicker,
//   SingleDatePicker,
//   DayPickerRangeController
// } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
export default function DateRange({
    isSingle = true,
    col = '12',
    labelName,
    inputName,
    placeholder,
    onChangeCallback,
    onChangeSingleCallback,
    required = true,
    children = null,
    hasError = null,
    icon = null,
    id,

}) {
  //   const [startDate, setStartDate] = React.useState();
  //   const [endDate, setEndDate] = React.useState();
  //   const [focusedInput, setFocusedInput] = React.useState();
  //   const [date, setDate] = React.useState();
  //   const [focused, setFocused] = React.useState();
  //   const errorMsg = "This field is required";

  //   console.log('startDate', JSON.stringify(startDate))
  //   console.log('endDate', JSON.stringify(endDate))
  //   console.log('date', JSON.stringify(date))

  //   useEffect(() => {
  //     let inputData = {
  //       key: inputName,
  //       value: date,
  //     };
  //     let single = { [inputName]: date };
  //     onChangeCallback(inputData);
  //     onChangeSingleCallback(single);
  //   }, [date, focused, focusedInput])

    return (
      <>
      </>
  //     <div className={`mb-3 col-md-${col}`}>
  //       {labelName && (
  //         <label>
  //           {labelName} {required ? <span className="red">*</span> : ""}
  //         </label>
  //       )}
  //       <div className={`position-relative`}>
  //         {isSingle ?
  //           <SingleDatePicker
  //             date={date}
  //             onDateChange={(date) => setDate(date)}
  //             focused={focused}
  //             onFocusChange={({ focused }) => setFocused(focused)}
  //             id={id}
  //             placeholder={placeholder}
  //             required={required}
  //             showClearDates={true}
  //           />
  //           :
  //           <DateRangePicker
  //             placeholder={placeholder}
  //             required={required}
  //             showClearDates={true}
  //             startDate={startDate}
  //             startDateId="start-date"
  //             endDate={endDate}
  //             endDateId="end-date"
  //             onDatesChange={({ startDate, endDate }) => {
  //               setStartDate(startDate);
  //               setEndDate(endDate);
  //             }}
  //             focusedInput={focusedInput}
  //             onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
  //             id={id}
  //           />
  //         }
  //         {icon && <span className={icon}></span>}
  //         {children && children}
  //         {hasError && <span className="error-msg display-block">{errorMsg}</span>}
  //       </div>

  //     </div>
    );
}

