import './SecondLogo.css';
import Buttons from "./Buttons/Buttons";
import logo from './logo.png';

const SecondLogo = () => {
    return (
        <div className='second-logo'>
            <img src={logo} alt='gg wp'/>
            <h1 className='text-under-second-logo'>
                <p className='big-text'>Видеопродакшн полного цикла</p>
                <p className='low-text'>Мы ценим качество и гарантируем результат, которым вы останетесь довольны</p>
            </h1>
            <div className='buttons'>

            </div>
            <Buttons/>
        </div>)
}

export default SecondLogo;