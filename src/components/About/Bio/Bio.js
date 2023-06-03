import './Bio.css';
import List from "./List/List";
import constants from "../../constants/constants";

const Bio = () => {

    return (<div className='bio-wrapper'>
        <div className='bio'>
            {constants.map(e => {
                return <List photo={e.photo} text={e.text} profession={e.profession} name={e.name} id={e.id}/>
            })}
        </div>
    </div>)
}
export default Bio;