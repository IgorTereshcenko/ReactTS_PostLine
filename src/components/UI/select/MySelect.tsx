import React, { FC } from 'react'

interface IOptionsSelect {
    value:string | number;
    name:string;
}

interface IMySelectProps {
    options:IOptionsSelect[];
    defaultValue:string;
    value:string | number;
    onChange:(e:React.ChangeEvent<HTMLSelectElement>) => void;
}

const MySelect:FC<IMySelectProps> = ({options,defaultValue,value,onChange}) => {

    return (
        <select
            value={value}
            onChange={onChange}>
            <option disabled value=''>{defaultValue}</option>    
            {options.map(option => 
                <option 
                    key={option.value} 
                    value={option.value}>
                        {option.name}
                </option>
            )}  
        </select>
    )
}

export default MySelect
