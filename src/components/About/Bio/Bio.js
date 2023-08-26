import './Bio.css';
import List from "./List/List";
import constants from "../../constants/constants";
const Bio = () => {

    function reveal() {
        const revealsLeft = document.querySelectorAll(".element-animation-left");
        const revealsRight = document.querySelectorAll(".element-animation-right");
        for (let i = 0; i < revealsLeft.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealsLeft[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                revealsLeft[i].classList.add("element-show-left");
            }
        }
        for (let i = 0; i < revealsRight.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealsRight[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                revealsRight[i].classList.add("element-show-right");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal();
    return (
        <div className='bio'>
            {constants.about.map(e => {
                return <List photo={e.photo} text={e.text} profession={e.profession} name={e.name} id={e.id} key={e.id}/>
            })}
        </div>)
}
export default Bio;