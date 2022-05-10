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

    const sum = state.reduce((s, a) => s + a.score, 0);

    const mean = sum / state.length;

    const range = () => {
        let large = 5;
        let small = 5;

        //There are issues here that need attention
        state.forEach(e => {
            if(e.score > large) { large = e.score}
            if(e.score < small) { small = e.score}            
        });
        return large - small;
    }

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
                <span className='stat-item'>
                    Mean: {mean}
                </span>
                <span className='stat-item'>
                    Range: {range()}
                </span>
            </div>
        </div>
    );
}

export default MainPage;