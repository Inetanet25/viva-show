import './ListForContent.css';
import {NavLink} from "react-router-dom";
const ListForContent = ({text, id, photo, name, price}) => {
    function checkId(id){
        if (id != 11){
            return (<p className='service-price'>Цена: от {price} руб</p>)
        }
    }
    return (<div className='service'>
        <div className='service-photo-and-text'>
        <div className='service-photo'>
            <img src={photo} alt='error'/>
        </div>
        <div className='service-text'>
            <p>{text}</p>
            {checkId(id)}
        </div>
        </div>
        <NavLink to={name} className='service-button'>Подробнее</NavLink>
    </div>)
}

export default ListForContent;