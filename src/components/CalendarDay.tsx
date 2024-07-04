/** CalendarDay component: defines a day in the calendar **/ 
import "./componentCSS/CalendarDay.css"; 
interface CalendarDayProps {
    date: Date, 
    displayType: string, // one of 'd', 'w', 'm' for day, week, month
}

const CalendarDay = ({ date, displayType }: CalendarDayProps) => {
    const getDayAbbreviation = (date: Date): string => {
        const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return daysOfWeek[date.getDay()];
    };

    return (
        <div className="calendar-day-cont">
            <div className="calendar-day-date">
                <span className="calendar-day-day">
                    {getDayAbbreviation(date)}
                </span>
                <span className="calendar-day-num">
                    {date.getDate()}
                </span>
            </div>
        </div>
    );
}

export { CalendarDay }
