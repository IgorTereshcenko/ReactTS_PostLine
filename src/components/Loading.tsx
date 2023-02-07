import React from 'react'
import loading from '../resurses/loading.svg';

const Loading = () => {

    return (
        <div style={{display:'flex', justifyContent:'center', marginTop: '15%'}}>
            <img src={loading} alt="loading icon" />
        </div>
    )
}

export default Loading;
