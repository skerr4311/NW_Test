import React, {useState, useReducer} from 'react'
import InputField from '../components/InputField';
import '../css/mainpage.css'
import {ScoreItem, Actions} from '../models/models'

const ScoreReducer = (state: ScoreItem[], action: Actions) => {
    switch(action.type){
        case "add":
            return [...state, {id: Date.now(), score: action.payload, include: true}];
        case "remove":
            return state;
    }
};

const MainPage:React.FC = () => {
    const [score, setScore] = useState<number>(0);
    const [state, dispatch] = useReducer(ScoreReducer, []);

    const HandleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(score > 0){
            dispatch({type:"add", payload:score})
            setScore(0);
        }
    }
    return(
        <div className='main'>
            <div className='side-pannel'>
                <span className='heading'>Side Pannel</span>
                <InputField score={score} setScore={setScore} handleAdd={HandleAdd}/>
                <div className='score-list-container'>
                    {state.map(t => (
                        t.score
                    ))}
                </div>
            </div>
            <div className='main-pannel'>
                main pannel
            </div>
        </div>
    );
}

export default MainPage;