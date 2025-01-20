// import XLSX from "XLSX";
import react, { useEffect, useMemo, useState } from "react";
import moment from "moment";

export const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

export const validateUrl = (url) => {
    const regexp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return url.match(regexp);
}

export const WeekOfTheDay = [
    {
        "day": "Monday",
        "id": 1
    },
    {
        "day": "Tuesday",
        "id": 2
    },
    {
        "day": "Wednesday",
        "id": 3
    },
    {
        "day": "Thursday",
        "id": 4
    },
    {
        "day": "Friday",
        "id": 5
    },
    {
        "day": "Saturday",
        "id": 6
    },
    {
        "day": "Sunday",
        "id": 7
    }
]

export const GetDay = (day) => {
    console.log("getDayFromList day", day)
    const getDayFromList = WeekOfTheDay?.filter((item) => {
        return item?.id === day
    })
    console.log("getDayFromList", getDayFromList?.[0]?.day)
    return getDayFromList?.[0]?.day
}
export const CurrencyList = [
    { "id": 1, "text": 'India', "value": 'INR' },
    { "id": 1, "text": 'Australia', "value": 'AUD' },
    { "id": 1, "text": 'Bahrain', "value": 'BHD' },
    { "id": 1, "text": 'Bangladesh', "value": 'BDT' },
    { "id": 1, "text": 'Bhutan', "value": 'BTN' },
    { "id": 1, "text": 'Canada', "value": 'CAD' },
    { "id": 1, "text": 'Indonesia', "value": 'IDR' },
    { "id": 1, "text": 'Kuwait', "value": 'KWD' },
    { "id": 1, "text": 'Malaysia', "value": 'MYR' },
    { "id": 1, "text": 'Nepal', "value": 'NPR' },
    { "id": 1, "text": 'New Zealand', "value": 'NZD' },
    { "id": 1, "text": 'Oman', "value": 'OMR' },
    { "id": 1, "text": 'Pakistan', "value": 'PKR' },
    { "id": 1, "text": 'Phillipines', "value": 'PHP' },
    { "id": 1, "text": 'Saudi Arabia', "value": 'SAR' },
    { "id": 1, "text": 'Singapore', "value": 'SGD' },
    { "id": 1, "text": 'South Africa', "value": 'ZAR' },
    { "id": 1, "text": 'Srilanka', "value": 'LKR' },
    { "id": 1, "text": 'Thailand', "value": 'THB' },
    { "id": 1, "text": 'UAE', "value": 'AED' },
    { "id": 1, "text": 'UK', "value": 'GBP' },
    { "id": 1, "text": 'USA', "value": 'USD' }
]

export const replaceUnderscore = (str) => {
    return str.replace(/_/g, ' ');
}
export const replaceWithDash = (str) => {
    return str.replace(/-/g, ' ');
}
export const donwloadOptions = [
    { "type": 'xls', 'text': "Download xls" },
    { "type": 'xlsx', 'text': "Download xlsx" },
    // { "type": 'txt', 'text': "Download txt" },
    // { "type": 'json', 'text': "Download json" }
]

export const DownloadExcel = (
    data,
    fileName,
    type,
    e) => {
    console.log("data", data)
    return null
}

let hours, minutes, ampm;
export const timeFrame = [];
for (var i = 540; i <= 1200; i += 15) {
    hours = Math.floor(i / 60);
    minutes = i % 60;
    if (minutes < 10) {
        minutes = '0' + minutes; // adding leading zero
    }
    ampm = hours % 24 < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    timeFrame.push({ text: hours + ':' + minutes + ' ' + ampm, id: 1, value: ampm === "AM" ? '1' + hours + '' + minutes : '2' + hours + '' + minutes });
}

export const getDaysBetweenDates = (startDate, endDate) => {
    var now = startDate.clone(), dates = [];
    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('MM/DD/YYYY'));
        now.add(1, 'days');
    }
    return dates;
};


export const objectToQueryString = (params) => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
}

export const trimString = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
}

export const plural = (str, length) => {
    return Number(length) < 2 ? str : str + 's'
}


export const ArrayTimeOption = [{
    "text": "09:00 AM",
    "id": 1,
    "value": "900"
}, {
    "text": "09:15 AM",
    "id": 2,
    "value": "915"
}, {
    "text": "09:30 AM",
    "id": 3,
    "value": "930"
}, {
    "text": "09:45 AM",
    "id": 4,
    "value": "945"
}, {
    "text": "10:00 AM",
    "id": 5,
    "value": "1000"
}, {
    "text": "10:15 AM",
    "id": 6,
    "value": "1015"
}, {
    "text": "10:30 AM",
    "id": 7,
    "value": "1030"
}, {
    "text": "10:45 AM",
    "id": 8,
    "value": "1045"
}, {
    "text": "11:00 AM",
    "id": 9,
    "value": "1100"
}, {
    "text": "11:15 AM",
    "id": 10,
    "value": "1115"
}, {
    "text": "11:30 AM",
    "id": 11,
    "value": "1130"
}, {
    "text": "11:45 AM",
    "id": 12,
    "value": "1145"
}, {
    "text": "12:00 PM",
    "id": 13,
    "value": "1200"
}, {
    "text": "12:15 PM",
    "id": 15,
    "value": "1215"
}, {
    "text": "12:30 PM",
    "id": 16,
    "value": "1230"
}, {
    "text": "12:45 PM",
    "id": 17,
    "value": "1245"
}, {
    "text": "1:00 PM",
    "id": 18,
    "value": "1300"
}, {
    "text": "1:15 PM",
    "id": 19,
    "value": "1315"
}, {
    "text": "1:30 PM",
    "id": 20,
    "value": "1330"
}, {
    "text": "1:45 PM",
    "id": 21,
    "value": "1345"
}, {
    "text": "2:00 PM",
    "id": 22,
    "value": "1400"
}, {
    "text": "2:15 PM",
    "id": 23,
    "value": "1415"
}, {
    "text": "2:30 PM",
    "id": 24,
    "value": "1430"
}, {
    "text": "2:45 PM",
    "id": 25,
    "value": "1445"
}, {
    "text": "3:00 PM",
    "id": 26,
    "value": "1500"
}, {
    "text": "3:15 PM",
    "id": 27,
    "value": "1515"
}, {
    "text": "3:30 PM",
    "id": 28,
    "value": "1530"
}, {
    "text": "3:45 PM",
    "id": 29,
    "value": "1545"
}, {
    "text": "4:00 PM",
    "id": 30,
    "value": "1600"
}, {
    "text": "4:15 PM",
    "id": 31,
    "value": "1615"
}, {
    "text": "4:30 PM",
    "id": 32,
    "value": "1630"
}, {
    "text": "4:45 PM",
    "id": 33,
    "value": "1645"
}, {
    "text": "5:00 PM",
    "id": 34,
    "value": "1700"
}, {
    "text": "5:15 PM",
    "id": 35,
    "value": "1715"
}, {
    "text": "5:30 PM",
    "id": 36,
    "value": "1730"
}, {
    "text": "5:45 PM",
    "id": 37,
    "value": "1745"
}, {
    "text": "6:00 PM",
    "id": 38,
    "value": "1800"
}, {
    "text": "6:15 PM",
    "id": 39,
    "value": "1825"
}, {
    "text": "6:30 PM",
    "id": 40,
    "value": "1830"
}, {
    "text": "6:45 PM",
    "id": 41,
    "value": "1845"
}, {
    "text": "7:00 PM",
    "id": 42,
    "value": "1900"
}, {
    "text": "7:15 PM",
    "id": 43,
    "value": "1915"
}, {
    "text": "7:30 PM",
    "id": 44,
    "value": "1930"
}, {
    "text": "7:45 PM",
    "id": 45,
    "value": "1945"
}, {
    "text": "8:00 PM",
    "id": 46,
    "value": "2000"
}]


export const TimeFrameWithOption = (startFrom) => {
    const timeFrame = []
    ArrayTimeOption?.map((item) => {
        console.log("TimeFrameWithOption", item?.value > startFrom, item?.value, startFrom)
        return Number(item?.value) > Number(startFrom) ? timeFrame.push({ text: item?.text, id: item?.id, value: item?.value }) : null;
    })
    return timeFrame
}

export const GetTimeFrame = (startFrom) => {
    const timeFrame = ArrayTimeOption?.find((item) => {
        return item?.value === startFrom
    })
    console.log("timeFrame GetTimeFrame", startFrom, timeFrame)
    return timeFrame?.text
}


export const objectLenght = (data) => {
    return Object.keys(data)?.length
}

export const findUserDetailByid = (id, userList) => {
    console.log("findUserDetailByid", id, userList)
    const aaa = userList?.length > 0 && userList?.find((item) => {
        return item?._id === id
    })
    return aaa
}

export const DisplayName = (senderDetails) => {
    if (senderDetails?.image?.length > 5) {
        return <span style={{ background: senderDetails?.color_code }}>
            <img src={process.env.react_app_base_url + "/" + senderDetails?.image} alt="" title="" />
        </span>
    } else {
        return <span style={{ background: senderDetails?.color_code }}>{senderDetails?.first_name?.slice(0, 1)}</span>
    }
}

export const DisplayEmailId = (tableData, userList) => {
    return tableData?.receiverIds?.map((item) => {
        const details = findUserDetailByid(item?.id ?? item, userList)
        console.log("details details", details)
        return details?.system_email_id
    }).join(", ")
}

export const DisplayNameDetails = (senderDetails, tableData, userList) => {
    console.log("DisplayNameDetails", senderDetails, userList)
    return (
        <>
            <div className="mail-avatar">{DisplayName(senderDetails)}</div>
            <div className="mailcontent-sender">
                <h6>{senderDetails?.first_name + " " + senderDetails?.last_name} <span>&lt;{senderDetails?.system_email_id}&gt;</span></h6>
                <p>to: {DisplayEmailId(tableData, userList)}</p>
            </div>
        </>
    )
}


export const tryLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    } catch (error) {
        return ''
    }
}

export const checkDate = (date) => {
    const inputDate = moment(date);
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    if (inputDate.isSame(today, 'day')) {
        return 'Today';
    } else if (inputDate.isSame(yesterday, 'day')) {
        return 'Yesterday';
    } else {
        return moment(date).format("DD/MM/YYYY");
    }
};

export const conversionToMB = (bytes) => {
    if (bytes) {
        const megabytes = (bytes / (1024 * 1024)).toFixed(2);
        return megabytes;
    }
    return bytes
};

export const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(2)} KB`;
    if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
    return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
};

export default validateEmail





