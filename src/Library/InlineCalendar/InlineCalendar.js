import React, { Component, useState } from 'react';
import CalendarDays from './calendar-days';
import moment from 'moment';
import './calendar.css'
import { Button } from '../Module';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date()
        }
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }

    nextDay = () => {
        console.log("nextDay", this.state.currentDay)
        const nextMonth = moment(this.state.currentDay).add(1, 'month').calendar()
        console.log("nextMonth", nextMonth)
        if (nextMonth === 'Today at 12:00 AM') {
            this.setState({ currentDay: new Date() });
        } else {
            this.setState({ currentDay: new Date(nextMonth) });
        }

    }

    previousDay = () => {
        console.log("previousDay", this.state.currentDay)
        const nextMonth = moment(this.state.currentDay).subtract(1, 'month').calendar()
        console.log("nextMonth", nextMonth)
        // this.setState({ currentDay: new Date(nextMonth) });
        if (nextMonth === 'Today at 12:00 AM') {
            this.setState({ currentDay: new Date() });
        } else {
            this.setState({ currentDay: new Date(nextMonth) });
        }
    }

    today = () => {
        this.setState({ currentDay: new Date() });
    }
    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <div className="title">
                        <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                    </div>
                    <div className="tools">
                        <Button buttonStyleType="primary" onClick={this.today}> Today </Button>
                        <Button buttonStyleType='info' onClick={this.previousDay}>
                            <span className="material-icons">
                                &#60;
                            </span>
                        </Button>
                        <p>{this.months[this.state.currentDay.getMonth()]?.substring(0, 3)} {this.state.currentDay.getDate()} {this.state.currentDay.getFullYear()}</p>
                        <Button buttonStyleType='info' onClick={this.nextDay}>
                            <span className="material-icons">
                                &#62;
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday) => {
                                return <div className="weekday"><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays type={this.props.type} data={this.props.calendarData} day={this.state.currentDay} />
                </div>
            </div>
        )
    }
}

// const InlineCalendar = ({ calendarData, type = '', children }) => {

//     const [today, setToday] = useState(new Date())
//     const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     const previousDay = () => {
//         // console.log("previousDay", this.state.currentDay)
//         // const nextMonth = moment(this.state.currentDay).subtract(1, 'month').calendar()
//         // console.log("nextMonth", nextMonth)
//         // this.setState({ currentDay: new Date(nextMonth) });
//     }

//     //     // today = () => {
//     //     //     this.setState({ currentDay: new Date() });
//     //     // }

//     const nextDay = () => {
//         // console.log("nextDay", this.state.currentDay)
//         // const nextMonth = moment(this.state.currentDay).add(1, 'month').calendar()
//         // console.log("nextMonth", nextMonth)
//         // this.setState({ currentDay: new Date(nextMonth) });
//     }

//     return (
//         <>
//             <div className="calendar">
//                 <div className="calendar-header">
//                     <div className="title">
//                         {/* <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2> */}
//                     </div>
//                     <div className="tools">
//                         <Button buttonStyleType="primary" onClick={setToday(new Date())}> Today </Button>
//                         <Button buttonStyleType='info' onClick={() => previousDay}>
//                             <span className="material-icons">
//                                 &#60;
//                             </span>
//                         </Button>
//                         {/* <p>{this.months[this.state.currentDay.getMonth()]?.substring(0, 3)} {this.state.currentDay.getDate()} {this.state.currentDay.getFullYear()}</p> */}
//                         <Button buttonStyleType='info' onClick={() => nextDay}>
//                             <span className="material-icons">
//                                 &#62;
//                             </span>
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="calendar-body">
//                     <div className="table-header">
//                         {weekdays.map((weekday) => {
//                             return <div className="weekday"><p>{weekday}</p></div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <CalendarDays type={type} data={calendarData} day={toda} />
//         </>
//     )
// }
// export default InlineCalendar