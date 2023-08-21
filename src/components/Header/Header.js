import './Header.css';
import Logo from "./Logo/Logo";
import HeaderBar from "./Headerbar/HeaderBar";
import SecondLogo from "./SecondLogo/SecondLogo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="header">
                    <div className='header-logo-navbar'>
                    <Logo/>
                    <HeaderBar/>

                </div>
                <BurgerMenu/>
                <SecondLogo/>
            </div>
        </div>
    )
}


export default Header;
