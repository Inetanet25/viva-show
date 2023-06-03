import './Header.css';
import Logo from "./Logo/Logo";
import HeaderBar from "./Headerbar/HeaderBar";
import SecondLogo from "./SecondLogo/SecondLogo";

// style={{height: window.innerHeight}
const Header = () => {
    return (
        <div className="header">
            <div className='header-logo-navbar'>
                <Logo/>
                <HeaderBar/>
            </div>
            <SecondLogo/>
        </div>
    )
}


export default Header;
