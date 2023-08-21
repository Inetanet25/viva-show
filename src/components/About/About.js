import './About.css';
import Team from "./Team/Team";
import Bio from "./Bio/Bio";
import camera from './img-camera.png';

const About = () => {
    return (<div>

            {/*<img alt='nema' src={camera}/>*/}

            <div className='about-team'>
                <div className='head-text'>
                    <p>Над созданием вашего эксклюзивного контента работают профессиональные режиссеры Всероссийского
                        государственного института кинематографии им. С.А. Герасимова.</p>
                </div>
                <Team/>
                <Bio/>
            </div>
        </div>
    )
}
export default About;
