import './FullService.css';


const FullService = ({id, name, price, photo, text, title}) => {
    return(<div className='full-service-wrapper'>
        <div className='full-service'>
                <div className='full-service-photo'>
                    <img src={photo} alt='error'/>
                    {title}
                </div>
                <div className='full-service-text'>
                    <p>{text}</p>
                    <p className='additional-service-text'>*Указанная стоимость носит информативный характер. Не является публичной офертой. Подробности о стоимости услуги и способах ее предоставления уточняйте у менеджера.</p>
                    <p className='full-service-price'>Цена от: {price} руб.</p>
                </div>
        </div>
    </div>)
}

export default FullService;