import './Carousel.css';
import constants from "../../../constants/constants";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Carousel = () => {
    const [translate,setTranslate] = useState(0);
    const handleLeftBtn = () => {
        if (translate + 15 <= 0){
            setTranslate(translate + 15);
        }
    }
    const handleRightBtn = () => {
        if (translate - 15 >=  (constants.services.length - 3) * (-15)) {
            setTranslate(translate - 15);
        }
    }
    return(<div className='carousel'>
        <button className='swipe-left' onClick={handleLeftBtn}>
            &#8249;
        </button>
        <div className='slider'>

            <div className='slider-elements' style={{
                transform:`translateX(${translate}vw)`
            }}>
                {constants.services.map((e) => {
                    return (<div className='service' key={e.id}>
                        <NavLink to={e.name}> <img src={e.photo} key={'img_' + e.id} className='service-image'/></NavLink>
                        {e.title}
                    </div>)
                })}
            </div>

        </div>
        <button className='swipe-right' onClick={handleRightBtn}>
            &#8250;
        </button>
    </div>)
}

export default Carousel;