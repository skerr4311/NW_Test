import React from 'react';
import '../css/listitems.css';
import { ScoreItem, Actions } from '../models/models';
import { AiFillDelete } from "react-icons/ai";

interface Props {
    scores: ScoreItem[];
    dispatch: React.Dispatch<Actions>
}

const ScoreList: React.FC<Props> = ({scores, dispatch}) => {

    const handleDelete = (id:number) => {
        dispatch({type:"remove", payload:id});
    };

    return(
        <div className='score-list-container'>
            {scores.map(s => (
                <form className="score_single">
                    <span className="todo-single-text">{s.score}</span>
                    <span className="score-icon" onClick={() => handleDelete(s.id)}>
                        <AiFillDelete />
                    </span>
                </form>
            ))}
        </div>
    );
};

export default ScoreList;