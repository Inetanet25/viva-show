import './Footer.css';
import {NavLink} from "react-router-dom";



const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className='footer'>
            <h1>Готовы стать звездой?</h1>
                <a href='mailto:andrena.production@yandex.ru' className='footer-links'>andrena.production@yandex.ru</a>
                <a href='tel:+79096515827' className='footer-links'>+7909651827</a>
            <NavLink to='./contacts' className='link-to-contacts'>Контакты</NavLink>
            </div>
            <div className='under-footer'>
            {/*    <div className=''>*/}
            {/*        <h3>Быстрые ссылки</h3>*/}
            {/*        <NavLink to='/content'>Главная</NavLink>*/}
            {/*        <NavLink to='/portfolio'>Портфолио</NavLink>*/}
            {/*        <NavLink to='/contacts'>Контакты</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className=''>*/}
            {/*        <h3>Наши контакты</h3>*/}
            {/*    </div>*/}
            </div>
        </div>

    )
}

export default Footer;