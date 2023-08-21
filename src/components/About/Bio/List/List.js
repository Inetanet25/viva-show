import './List.css';
import {useEffect, useState, useRef} from "react";


const List = ({name = 'Alice', text = 'Hello', profession = 'Stroitel', photo}) => {
    const [isFocus, setIsFocus] = useState('not-focus');
    const [isShow, setIsShow] = useState('hide-text');
    const [isShowBtn, setIsShowBtn] = useState('hide-btn');
    const checkBtn = isShowBtn;
    const checkText = isShow;
    const bioRef = useRef(null);
    let classOfImg = isFocus;
    useEffect(() => {
        const clickInsideOfBio = (e) => {
            if (bioRef.current && bioRef.current.contains(e.target) && isFocus === 'not-focus'){
                setIsFocus(prevState => 'focus');
                setIsShow(prevState => 'show-text');
                setIsShowBtn(prevState => 'show-btn');
            }
        };
        document.addEventListener('click', clickInsideOfBio, true);
        return () => {
            document.removeEventListener('click', clickInsideOfBio, true);
        }
    }, [isFocus]);
    function checkButton () {
        setIsFocus(prevState => 'not-focus');
        setIsShow(prevState => 'hide-text');
        setIsShowBtn(prevState => 'hide-btn');
    }
    return (<div className='biography'>
        <div className='ava-and-text'>
            <img src={photo} className={classOfImg + ' bio-img'} ref={bioRef}/>
            <div className={ checkText + ' text'}>
                {text}
            </div>
            <div className={checkBtn + ' exit-button'} onClick={checkButton}>Скрыть</div>
        </div>
        <h1>{name}</h1>
        <p>{profession}</p>
    </div>)
}

export default List;