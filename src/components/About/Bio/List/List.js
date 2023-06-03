import './List.css';

const List = ({name = 'Alice', text = 'Hello', profession = 'Stroitel', photo}) => {
    return (<div className='biography'>
        <div className='head-of-bio'>
            <div className='bio-photo'>
                <img src={photo} alt='error' className='bio-photo'/>
            </div>
            <div className='bio-name'>
                {name}
            </div>
            <div className='bio-profession'>
                {profession}
            </div>
        </div>
        <div className='bio-text-wrapper'>
            <div className='bio-text'>
                {text}
            </div>
        </div>
    </div>)
}

export default List;