import './Videos.css';

const Videos = () => {
    return (<div className='videos-wrapper'>
        <div className='videos'>
            <div className='video-content'>
                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/IMG_0512.mp4"/>
                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/ЧБ-свидание.mp4"/>
                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/КТ-2-промо.mp4"/>

                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/КИНОКОРПОРАТИВ-proстихи.mp4"/>
                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/стих-про-30-лет.mov"/>
                <video controls poster="https://viva-show.ru/wp-content/uploads/2023/04/photo1681544249.jpeg"
                       src="https://viva-show.ru/wp-content/uploads/2023/04/новое-Сапфо.mp4"/>
            </div>
        </div>
    </div>)
}
export default Videos;