/** Body: main body component that everything in the main application **/
import { Header } from "./Header";
import { MainCalendar } from "./MainCalendar";
const Body = () => {
    return (
        <div className="body">
            {/*header */}
            <Header/>
            <MainCalendar/>
        </div>
    )
}

export { Body };
