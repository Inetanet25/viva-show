import './FullService.css';


const FullService = ({id, name, price, photo, text}) => {
    return(<div className='full-service'>
                <div className='full-service-photo'>
                    <img src={photo} alt='error'/>
                </div>
                <div className='full-service-text'>
                    <p>{text}</p>
                </div>
    </div>)
}

export default FullService;