import './Bio.css';
import List from "./List/List";
import constants from "../../constants/constants";

const Bio = () => {

    return (
        <div className='bio'>
            {constants.about.map(e => {
                return <List photo={e.photo} text={e.text} profession={e.profession} name={e.name} id={e.id}/>
            })}
        </div>)
}
export default Bio;