import './Header.css';
import HeaderBar from "./Headerbar/HeaderBar";
import SecondLogo from "./SecondLogo/SecondLogo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import logo from './Logo/logo.png';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="header">
                    <div className='header-navbar'>
                        {/*<img src={logo}/>*/}
                    <HeaderBar/>

                </div>
                <BurgerMenu/>
                <SecondLogo/>
            </div>
        </div>
    )
}


export default Header;
