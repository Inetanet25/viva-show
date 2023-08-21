import './Content.css';
import Services from "./Services/Services";
import About from "../About/About";


const Content = () => {
    return (
        <div className='content-wrapper'>
            <div className='content'>
                <div className='head-of-content'>
                <h1>Услуги</h1>
                <p>Мы предлагаем широкий спектр услуг в области видеосъемки</p>
                </div>
                <Services/>
                <About/>
            </div>
        </div>
    )
}
export default Content;

