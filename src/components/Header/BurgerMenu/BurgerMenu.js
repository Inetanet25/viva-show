import './BurgerMenu.css';
import {NavLink} from "react-router-dom";
const BurgerMenu = () => {


    return (<div className='burger-menu'>
        <input type="checkbox"/>
        <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
        </div>

        <div className='navbar'>
            <NavLink to='/' className={(e) => e.isActive ? 'active' : 'disable'}>Главная
                страница</NavLink>
            <NavLink to='/contacts' className={(e) => e.isActive ? 'active' : 'disable'}>Контакты</NavLink>

            <NavLink to='/videos' className={(e) => e.isActive ? 'active' : 'disable'}>Видео</NavLink>
            <NavLink to='/portfolio'
                     className={(e) => e.isActive ? 'active' : 'disable'}>Портфолио</NavLink>
            <NavLink to='/stock'
                     className={(e) => e.isActive ? 'active' : 'disable'}>Акции</NavLink>
            <NavLink to='/about'
                     className={(e) => e.isActive ? 'active' : 'disable'}>О нас</NavLink>
        </div>
    </div>)
}
export default BurgerMenu;