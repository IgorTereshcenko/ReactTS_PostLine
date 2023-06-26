import React from 'react'
import errorIcon from '../resurses/error.svg';

const Error = () => {

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'15%'}}>
                {/* <img src={errorIcon} alt="error icon" /> */}
            </div>
            <h3 style={{textAlign: 'center'}}>Упс, что-то пошло не так, попробуйте позже</h3>
        </div>
    )
}

export default Error;
