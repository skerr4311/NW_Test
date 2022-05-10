import React, {useRef} from 'react'
import {Score} from '../models/models'
import '../css/inputfield.css'

const InputField: React.FC<Score> = ({score, setScore, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <input 
                ref={inputRef}
                type="number"
                placeholder='Please enter a score'
                className='input-box'
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
            />
            <button type="submit" className='input-submit'>Add</button>
        </form>
    );
}

export default InputField;