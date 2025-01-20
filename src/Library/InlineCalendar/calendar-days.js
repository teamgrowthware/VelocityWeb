// import moment from "moment";
// import { useState } from "react";
// import { Button } from "../Module";

// function CalendarDays(props) {
//     const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
//     const weekdayOfFirstDay = firstDayOfMonth.getDay();
//     let currentDays = [];

//     for (let day = 0; day < 42; day++) {
//         if (day === 0 && weekdayOfFirstDay === 0) {
//             firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
//         } else if (day === 0) {
//             firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
//         } else {
//             firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
//         }

//         let calendarDay = {
//             currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
//             date: (new Date(firstDayOfMonth)),
//             month: firstDayOfMonth.getMonth(),
//             number: firstDayOfMonth.getDate(),
//             selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
//             year: firstDayOfMonth.getFullYear()
//         }

//         currentDays.push(calendarDay);
//     }
//     const [show, setShow] = useState(false)
//     const showOther = () => {
//         setShow(true)
//     }

//     return (
//         <div className="table-content">
//             {
//                 currentDays.map((day) => {
//                     console.log("day", day)
//                     const DayData = props.data.filter((item) => {
//                         return item.date === moment(day.date).format("DD/MM/YYYY")
//                     })
//                     return (
//                         <div className={`calendar-day ${day.date.getDay() === 0 ? 'sun-day' : day.date.getDay() === 6 ? 'sat-day' : 'other-day'}` + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
//                             onClick={() => props.changeCurrentDay(day)}>
//                             <p>{day.number}</p>
//                             <ul>
//                                 {DayData?.map((item, index) => {
//                                     return index < 2 && <>
//                                         <li>{item?.start_time + ' - ' + item?.end_time + ' ' + item?.meeting_title}</li>
//                                     </>
//                                 })}
//                                 {DayData?.length > 2 && <Button onClick={showOther} buttonStyleOutline buttonStyleType="primary">View All </Button>}
//                                 {JSON.stringify(show)}
//                             </ul>

//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default CalendarDays;


import moment from "moment";
import { useState } from "react";
import { Button, SideDrawer } from "../Module";
import CustomTooltip from "../Tooltip/Tippy";
import { GetTimeFrame } from "../Utility/Utility";

const CalendarDays = (props) => {
    const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }
    const [show, setShow] = useState(false)
    const [popupData, setPopupData] = useState()
    const showOther = (data) => {
        setShow(true)
        setPopupData(data)
    }
    const CloseDrawer = () => {
        setShow(false)
        setPopupData()
    };

    return (
        <div className="table-content">
            {
                currentDays.map((day) => {
                    // console.log("day", day)
                    const DayData = props.data.filter((item) => {
                        return item.date === moment(day.date).format("DD/MM/YYYY")
                    })
                    return (
                        <>
                            {props.type === 'leave' ?
                                <div className={`calendar-day ${day.date.getDay() === 0 ? 'sun-day' : day.date.getDay() === 6 ? 'sat-day' : 'other-day'}` + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")} >
                                    <p>{day.number}</p>
                                    <ul>
                                        {DayData?.map((item, index) => {
                                            // console.log("item adasd", item)
                                            return index < 3 && <>
                                                <li className={`line ${item?.leaveDay === '0.5' ? 'half_day' : 'full_day'}
                                                ${item?.status}`}>
                                                    <CustomTooltip
                                                        title={"title"}
                                                        position={"bottom"}
                                                        disabled={false}
                                                        content={<div className={`tooltipContent tabluer`}>
                                                            <p><label>User - </label> {item?.user_name}</p>
                                                            <p className={`line ${item?.status}`}><label>Status - </label> {item?.status}</p>
                                                            <p><label>Date -</label> {item?.date}</p>
                                                            <p><label>Day Type -</label>  {item?.leaveDay === '0.5' ? <span className="tag">Half Day</span> : 'Full Day'} </p>
                                                            <p><label>Reason -</label> {item?.leave_reason}</p>
                                                            <p><label>Type - </label> {item?.leave_type}</p>
                                                        </div>}>
                                                        {item?.user_name + ' on leave for ' + item?.leave_reason}
                                                    </CustomTooltip>

                                                </li>
                                            </>
                                        })}
                                    </ul>
                                    {DayData?.length > 3 && <Button onClick={() => showOther(DayData)} buttonStyleOutline buttonStyleType="primary">View All </Button>}

                                </div>
                                :
                                <div className={`calendar-day ${day.date.getDay() === 0 ? 'sun-day' : day.date.getDay() === 6 ? 'sat-day' : 'other-day'}` + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")} >
                                    <p>{day.number}</p>
                                    <ul>
                                        {DayData?.map((item, index) => {
                                            return index < 3 && <>
                                                <li>
                                                    <CustomTooltip
                                                        title={"title"}
                                                        position={"bottom"}
                                                        disabled={false}
                                                        content={<div className={`tooltipContent tabluer2`}>
                                                            <p><label>User </label> {item?.user_name}</p>
                                                            <p><label>Title </label> {item?.meeting_title}</p>
                                                            <p><label>Room Name </label> {item?.meeting_room_name}</p>
                                                            <p><label>Date </label> {item?.date}</p>

                                                            <p><label>Start Time </label> {GetTimeFrame(item?.start_time)}</p>
                                                            <p><label>End Time </label> {GetTimeFrame(item?.end_time)}</p>
                                                        </div>}>
                                                        {`${GetTimeFrame(item?.start_time)} - ${GetTimeFrame(item?.end_time)} ${item?.meeting_title}`}
                                                    </CustomTooltip>
                                                </li>
                                            </>
                                        })}
                                    </ul>
                                    {DayData?.length > 3 && <Button onClick={() => showOther(DayData)} buttonStyleOutline buttonStyleType="primary">View All </Button>}
                                </div>
                            }

                        </>
                    )
                })
            }

            {show && (
                <SideDrawer
                    size={'850px'}
                    pagetitle={`Details for ${popupData?.[0].date}`}
                    action={CloseDrawer}
                >
                    <div className="p-1">
                        {props.type === 'leave' ?
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th> Leave Reason </th>
                                        <th> Leave Type </th>
                                        <th> Start Date </th>
                                        <th> End Date </th>
                                        <th> Leave Day Type</th>
                                        <th> Status </th>
                                        <th> User </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {popupData?.map((item) => {
                                        return (<tr>
                                            <td> {item?.leave_reason} </td>
                                            <td> {item?.leave_type} </td>
                                            <td> {moment(item?.start_date).format("DD/MM/YYYY")} </td>
                                            <td> {moment(item?.end_date).format("DD/MM/YYYY")}  </td>
                                            <td> {item?.leaveDay === '0.5' ? 'Half Day' : 'Full Day'} </td>
                                            <td> {item?.status} </td>
                                            <td> {item?.user_name} </td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                            :
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th> Title </th>
                                        <th> Date </th>
                                        <th> Room </th>
                                        <th> Start Time </th>
                                        <th> End Time </th>
                                        <th> User </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {popupData?.map((item) => {
                                        return (<tr>
                                            <td> {item?.meeting_title} </td>
                                            <td> {item?.date} </td>
                                            <td className="changeCase"> {item?.meeting_room_name} </td>
                                            <td> {GetTimeFrame(item?.start_time)} </td>
                                            <td> {GetTimeFrame(item?.end_time)} </td>
                                            <td> {item?.user_name} </td>

                                        </tr>)
                                    })}
                                </tbody>
                            </table>}
                    </div>
                    <div className="clearfix"></div>
                </SideDrawer>
            )}
        </div>
    )
}

export default CalendarDays;
