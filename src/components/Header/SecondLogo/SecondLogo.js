import './SecondLogo.css';
import Buttons from "./Buttons/Buttons";

const SecondLogo = () => {
    return (
        <div className='second-logo'>
            <img src='https://viva-show.ru/wp-content/uploads/2022/12/VIVA-SHOW.webp' alt='gg wp'/>
            <h1 className='text-under-second-logo'>
                Организация Мероприятий По Мотивам Любимых Фильмов
            </h1>
            <div className='buttons'>
                <Buttons/>
            </div>
        </div>)
}

export default SecondLogo;