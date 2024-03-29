import './HeaderBar.css';
import {NavLink} from "react-router-dom";

const HeaderBar = () => {
    return (<div className='header-bar'>

        <NavLink to='/' className={(e) => e.isActive ? 'active' : 'disable'}>Главная
            страница</NavLink>
        {/*<NavLink to='/videos' className={(e) => e.isActive ? 'active' : 'disable'}>Видео</NavLink>*/}
        <NavLink to='/portfolio'
                 className={(e) => e.isActive ? 'active' : 'disable'}>Портфолио</NavLink>
        <NavLink to='/stock'
                 className={(e) => e.isActive ? 'active' : 'disable'}>Акции</NavLink>
        <NavLink to='/contacts' className={(e) => e.isActive ? 'active' : 'disable'}>Контакты</NavLink>

    </div>)
}
export default HeaderBar;