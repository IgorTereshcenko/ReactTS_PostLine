import React, { FC, MouseEventHandler, PropsWithChildren, useState } from 'react'
import './myModal.scss';

interface IModalProps {
    visible: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>
}

const MyModal:FC<PropsWithChildren<IModalProps>> = ({children,visible,onClick}) => {

    return (
        <div className={visible ? 'myModal myModal_active' : 'myModal'} onClick={onClick}>
            <div className="myModal__overlay" onClick={onClick}>
                <div className="myModal__content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>   
        </div>
    )
}

export default MyModal
