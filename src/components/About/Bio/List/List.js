import './List.css';
import {useEffect, useState} from "react";


const List = ({name = 'Alice', text = 'Hello', profession = 'Stroitel', photo, id}) => {


    return (<div className={'biography ' + (id % 2 === 1 ? 'position-left element-animation-left' : 'position-right element-animation-right')} key={id}>

        <img src={photo}
             className={'bio-photo ' + (id % 2 === 1 ? 'img-left' : 'img-right')}/>
        <div className={'other-bio ' + (id % 2 === 1 ? 'other-left' : 'other-right')}>
            <h1 className={'bio-name ' + (id % 2 === 1 ? 'name-left' : 'name-right')}>{name}</h1>
            <div className={'name-and-profession ' + (id % 2 === 1 ? 'name-left' : 'name-right')}>
                <p>{profession}</p>
                <div className={'text ' + (id % 2 === 1 ? 'text-left' : 'text-right')}>
                    {text}
                </div>
            </div>
        </div>


    </div>)
}

export default List;