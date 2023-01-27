import React, { FC,PropsWithChildren } from 'react'
import './myButton.scss';

interface IMyButtonProps {
    onClick?: () => void;
    type?:'submit'|'button'| 'reset'
}

const MyButton:FC<PropsWithChildren<IMyButtonProps>> = ({onClick,children, type}) => {
    return (
        <button 
            onClick={onClick} 
            className='myButton'
            type={type}>
                {children}
        </button>
    )
}

export default MyButton
