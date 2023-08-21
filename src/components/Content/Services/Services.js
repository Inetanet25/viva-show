import ListForContent from "./ListForContent/ListForContent";
import constants from "../../constants/constants";
import './Services.css';


const Services = () => {
    return (<div className='services'>
        {constants.services.map(e => {
            return <ListForContent text={e.text} id={e.id} photo={e.photo} name={e.name} price={e.price}/>
        })}
    </div>)
}
export default Services;