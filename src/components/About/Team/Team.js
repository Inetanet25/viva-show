import './Team.css';

const Team = () => {
    return (<div className='team-wrapper'>
        <div className='team'>
            <div className='our-team'>
                <div className='our-team-text-wrapper'>
                    <div className='our-team-text'>
                        <h1>Наша команда</h1>
                        <div>Нас объединяет творчество и желание наполнить этот мир красками! Мы знаем толк в хорошем
                            кино и
                            снимаем с любовью.
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-container-wrapper'>
                        <div className='card-container'>
                            <div className='image-name-container'>
                                <div className='image'>
                                    <img alt='nema'
                                         src='https://viva-show.ru/wp-content/uploads/2023/04/photo1681459185-1.jpeg'/>
                                </div>
                                <div className='name'>
                                    <h2>Андрей Осипов</h2>
                                    <p>Основатель проекта</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-container-text'>
                            Мы предлагаем каждому прикоснуться к волшебному миру кино и почувствовать себя настоящей
                            звездой!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Team;