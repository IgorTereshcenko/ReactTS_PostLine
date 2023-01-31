import React, { FC } from 'react';
import './myInput.scss';

interface IMyInputProps {
    type:string;
    placeholder:string;
    value:string;
    required?:boolean;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput:FC<IMyInputProps> = ({type,placeholder,value,onChange,required}) => {
    return (
        <input 
            type={type}
            required={required} 
            placeholder={placeholder}
            value={value} 
            className='myInput'
            onChange={onChange}/>
      )
}

export default MyInput
