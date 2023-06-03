import './HeaderBar.css';
import {NavLink} from "react-router-dom";

const HeaderBar = () => {
    return (<div className='header-bar'>

        <NavLink to='/main' className={(e) => e.isActive ? 'active' : 'disable'}>Главная
            страница</NavLink>
        <NavLink to='/contacts' className={(e) => e.isActive ? 'active' : 'disable'}>Контакты</NavLink>

        <NavLink to='/videos' className={(e) => e.isActive ? 'active' : 'disable'}>Видео</NavLink>
        <NavLink to='/portfolio'
                 className={(e) => e.isActive ? 'active' : 'disable'}>Портфолио</NavLink>
        <NavLink to='/stock'
                 className={(e) => e.isActive ? 'active' : 'disable'}>Акции</NavLink>
        <NavLink to='/about'
                 className={(e) => e.isActive ? 'active' : 'disable'}>О нас</NavLink>

    </div>)
}
export default HeaderBar;