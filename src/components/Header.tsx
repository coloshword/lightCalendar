/** The header of the application **/
import logo from "../assets/logo.png";
import settings from "../assets/gear.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import './componentCSS/Header.css';

/** HeaderButton: component defining a button of the header **/
interface HeaderButtonProps {
    imagePath: { src: string },
}

const HeaderButton = ({imagePath}: HeaderButtonProps) => {
    return (
        <button className="header-button">
            <img src={imagePath.src} className="control-icon"/> 
        </button> 
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo-cont">
                <img src={logo.src} className="logo"/>
                <span className="header-app-name">
                    lightCalendar
                </span>
            </div>
            <div className="header-controls">
                <div className="header-controls-control">
                    <HeaderButton 
                        imagePath={arrowLeft}
                    />

                    <HeaderButton 
                        imagePath={arrowRight}
                    />
                </div>
                <div className="header-controls-settings">
                    <HeaderButton
                        imagePath={settings}
                    />
                </div>
            </div>
        </div>
    )
};

export { Header };
