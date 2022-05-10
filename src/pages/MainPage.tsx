import React, {useState, useReducer} from 'react'
import InputField from '../components/InputField';
import ScoreList from '../components/ScoreList';
import '../css/mainpage.css'
import {ScoreItem, Actions} from '../models/models'

const ScoreReducer = (state: ScoreItem[], action: Actions) => {
    switch(action.type){
        case "add":
            return [...state, {id: Date.now(), score: action.payload, include: true}];
        case "remove":
            return state.filter((score) => score.id !== action.payload);
    }
};

const MainPage:React.FC = () => {
    const [score, setScore] = useState<number>(0);
    const [state, dispatch] = useReducer(ScoreReducer, []);

    const HandleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(score > 0 && score <= 10){
            dispatch({type:"add", payload:score})
            setScore(0);
        }else{
            setScore(0);
        }
    }
    return(
        <div className='main'>
            <div className='side-pannel'>
                <span className='heading'>Enter a score between 1 - 10</span>
                <InputField score={score} setScore={setScore} handleAdd={HandleAdd}/>
                <ScoreList scores={state} dispatch={dispatch}/>
            </div>
            <div className='main-pannel'>
                main pannel
            </div>
        </div>
    );
}

export default MainPage;