import React from "react";
const DateOfCreate = (props) =>{
    const toMonth = (date) =>{
        return date / 2628000000
    }
    const toWeek = (date) =>{
        return date / 604800000
    }
    const toDay = (date) =>{
        return date / 86400000
    }
    const toHour = (date) =>{
        return date / 3600000
    }
    const toMinute = (date) =>{
        return date / 60000
    }
    const toSec = (date) =>{
        return date / 1000
    }
    const countDate = () =>{
        const DateNow = new Date()
        const ResDateInMs = DateNow - props.webPublicationDate;
        const dateDifference = [];
        dateDifference.push(toMonth(ResDateInMs));
        dateDifference.push(toWeek(ResDateInMs));
        dateDifference.push(toDay(ResDateInMs));
        dateDifference.push(toHour(ResDateInMs));
        dateDifference.push(toMinute(ResDateInMs));
        dateDifference.push(toSec(ResDateInMs));
        for(let i = 0; i < dateDifference.length; i++){
            if(dateDifference[i]>=1){
                switch (i){
                    case 0:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 year ago' : `Created ${Math.trunc(dateDifference[i])} years ago`)
                    case 1:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 week ago' : `Created ${Math.trunc(dateDifference[i])} weeks ago`)
                    case 2:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 day ago' : `Created ${Math.trunc(dateDifference[i])} days ago`)
                    case 3:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 hour ago' : `Created ${Math.trunc(dateDifference[i])} hours ago`)
                    case 4:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 minute ago' : `Created ${Math.trunc(dateDifference[i])} minutes ago`)
                    case 5:
                        return (Math.trunc(dateDifference[i]) === 1 ? 'Created 1 second ago' : `Created ${Math.trunc(dateDifference[i])} seconds ago`)
                    default:
                        return ('Created now')
                }
            }
        }
    }
    return(
        <span className={[props.nameOfClass]}>{countDate()}</span>
    )
}
export default DateOfCreate