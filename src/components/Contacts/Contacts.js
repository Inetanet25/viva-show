import './Contacts.css';
import {useState} from "react";
import photo1 from './photo/позвоните.png';
import photo2 from './photo/почта.png'
import photo3 from './photo/мессенджеры.png'

const Contacts = () => {

    const [firstBtn, setFirstBtn] = useState(false);
    const [secondBtn, setSecondBtn] = useState(false);


    return (<div className='contacts-wrapper'>
        <div className='contacts'>
            <h1>Контактные данные</h1>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <a href="tel:+79096515827"><img src={photo1} /></a>
                    <h3>Позвоните нам</h3>
                </div>
                <div className='contact-detail'>
                    <a href="mailto:andrena.production@yandex.ru"><img src={photo2} /></a>
                    <h3>Напишите нам</h3>
                </div>
                <div className='contact-detail'>
                    <a href='https://t.me/Osipov_dir'><img src={photo3} /></a>
                    <h3>Мессенджеры</h3>
                </div>
            </div>
        </div>
        <div className='additional-contacts'>
            <h1>Дополнительно</h1>
            <div className='additional-contacts-detail'>
                <ul>
                    <li className='additional-contacts-detail-list'>
                        Для соискателей
                        <button className='plus-animation' onClick={() => setFirstBtn(!firstBtn)}>
                            <span className={'horizontal-line ' + (!firstBtn ? 'active-btn' : '')}></span>
                            <span className='horizontal-line'></span>
                        </button>
                        <div className={'additional-text ' + (firstBtn ? 'text-active-btn' : '')} hidden={!firstBtn}>
                            ANDRENA production приглашает к сотрудничеству соискателей. Если вы творческий и креативный, ваша деятельность связана с индустрией производства видеоконтента и развлечений, напишите нам. Мы свяжемся с вами для обсуждения дальнейшего плодотворного сотрудничества.
                            <p>+7 909 651 5827</p>
                            <p>vivashow.info@yandex.ru</p>
                        </div>
                    </li>
                    <li className='additional-contacts-detail-list'>
                        Для бизнеса
                        <button className='plus-animation' onClick={() => setSecondBtn(!secondBtn)}>
                            <span className={'horizontal-line ' + (!secondBtn ? 'active-btn' : '')}></span>
                            <span className='horizontal-line'></span>
                        </button>
                        <div className={'additional-text ' + (secondBtn ? 'text-active-btn' : '')} hidden={!secondBtn}>
                            ANDRENA production предлагает взаимовыгодное сотрудничество владельцам бизнеса.
                            <p>+7 909 651 5827</p>
                            <p>vivashow.info@yandex.ru</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}
export default Contacts;