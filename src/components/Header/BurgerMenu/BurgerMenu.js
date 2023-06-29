import './BurgerMenu.css';
import {NavLink} from "react-router-dom";
import {useRef, useEffect, useState} from "react";

const BurgerMenu = () => {

const navbarRef = useRef(null);
const [isMenuOpen, setIsMenuOpen] = useState('close');
const menuClass = isMenuOpen;
function changeOfInput() {

    setIsMenuOpen(prev => {
        if (prev === 'open') return ('close')
        else return ('open');
    });
}

const checkBurger = document.getElementById('burger');
useEffect(() => {

    const ClickOutside = (e) => {
        console.log(navbarRef.current.contains(e.target));
        if ( navbarRef.current && navbarRef.current.contains(e.target) === false && isMenuOpen === 'open' && checkBurger.checked === true) {
            setIsMenuOpen( 'close');
            checkBurger.checked = false;

        }
    };
    document.addEventListener('click', ClickOutside, true);
    return() => {
        document.removeEventListener('click', ClickOutside, true)
    };
}, [isMenuOpen])


    return (<div className='burger-menu'>
        <input id='burger' type="checkbox" onClick={changeOfInput}/>
        <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
        </div>

        <div className={menuClass}  ref={navbarRef}>
            <NavLink to='/' className={(e) => e.isActive ? 'active' : 'disable'}>Главная страница</NavLink>
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