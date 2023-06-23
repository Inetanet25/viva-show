import './About.css';
import Team from "./Team/Team";
import Bio from "./Bio/Bio";

const About = () => {
    return (<div className='about'>
            <div className='about-container'>
                <div className='picture-and-text-container'>
                    <div className='picture-and-text'>
                        <div className='picture'>
                            <img alt='nema'
                                 src='https://viva-show.ru/wp-content/uploads/2023/04/old-fashioned-movie-camera-movie-set-prop-cardboard-standup.webp'/>
                        </div>
                        <div className='text-right-of-picture'>
                            <div className='upper-text'>
                                <h1>Мы ценим качество и гарантируем результат, которым вы останетесь довольны</h1>
                            </div>
                            <div className='text'>
                                <br/>
                                <p>Event production VIVA-show призван создать уникальное мероприятие, которое позволит
                                вам
                                почувствовать себя кинозвездой. Мы подготовим для вас оригинальный сценарий по
                                мотивам
                                известных
                                    кинокартин и отправимся в увлекательное путешествие под названием «Кино».</p>
                                <p>Над
                                созданием вашего эксклюзивного кинофильма работают профессиональные режиссеры
                                Всероссийского
                                    государственного института кинематографии им. С.А. Герасимова.</p>
                            </div>
                            <div className='card'>
                                <div className='card-container'>
                                    <div className='image-name-container'>
                                        <img alt='nema'
                                             src='https://viva-show.ru/wp-content/uploads/2023/04/photo1681408660-5-723x1024.jpeg'/>
                                        <div className='name'>
                                            <h2>Елена Янкович</h2>
                                            Основатель проекта
                                        </div>
                                    </div>
                                    <div className='card-container-text'>
                                        <br/>Своей задачей мы видим создание уникального продукта, который
                                        существует вне
                                        времени.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-team'>
                <Team/>
                <Bio/>
            </div>
        </div>
    )
}
export default About;
