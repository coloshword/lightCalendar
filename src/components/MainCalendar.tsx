import "./componentCSS/MainCalendar.css";
import { useState, useEffect } from "react";
import { CalendarDay } from "./CalendarDay";

const MainCalendar = () => {
    const [todayDate, setTodayDate] = useState<Date>(new Date());
    useEffect(() => {
        // get the date to be displayed 
        setTodayDate(new Date());
    }, []);
    return (
        <div className="main-calendar-cont">
            <CalendarDay
                date={todayDate}
                displayType="w"
            />
        </div>
    )
}

export { MainCalendar };
