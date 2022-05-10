import React from 'react'
import InputField from '../components/InputField';
import '../css/mainpage.css'

const MainPage:React.FC = () => {
    return(
        <div className='main'>
            <div className='side-pannel'>
                <span className='heading'>Side Pannel</span>
                <InputField />
            </div>
            <div className='main-pannel'>
                main pannel
            </div>
        </div>
    );
}

export default MainPage;