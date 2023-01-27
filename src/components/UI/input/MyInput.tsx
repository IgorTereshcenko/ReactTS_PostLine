import React, { FC } from 'react';
import './myInput.scss';

interface IMyInputProps {
    type:string;
    placeholder:string;
    value:string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput:FC<IMyInputProps> = ({type,placeholder,value,onChange}) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            value={value} 
            className='myInput'
            onChange={onChange}/>
      )
}

export default MyInput
