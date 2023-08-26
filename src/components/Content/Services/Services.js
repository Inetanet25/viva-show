import constants from "../../constants/constants";
import './Services.css';
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import Carousel from "./Carousel/Carousel";


const Services = () => {


    const [counter, setCounter] = useState(1);
    const [turn, setTurn] = useState(null);
    useEffect(() => {

    }, [counter]);

    return (<div className='services'>
       <Carousel/>
    </div>)
}
export default Services;