import './ServiceCalc.css';

const ServiceCalc = () => {
    return (<div className='service-calc-wrapper'>
        <div className='text-over-calc'>
        <h1>Калькулятор для услуг</h1>
        </div>
        <div className='calc'>
            <div className='service'>
                <ul>
                    <li>
                        <button>Кол-во персонажей</button>
                    </li>
                    <li>
                        <button>Приглашенные актеры</button>
                    </li>
                    <li>
                        <button>Локации</button>
                    </li>
                    <li>
                        <button>Кол-во локаций</button>
                    </li>
                    <li>
                        <button>Наличие сценария</button>
                    </li>
                </ul>
            </div>
            <div className='add-service'>

            </div>
        </div>
    </div>)
}

export default ServiceCalc;