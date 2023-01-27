import React, { FC,PropsWithChildren } from 'react';
import './myForm.scss';

interface IMyFormProps {
    onSubmit?: React.FormEventHandler;
}

const MyForm:FC<PropsWithChildren<IMyFormProps>> = ({children, onSubmit}) => {
  return (
        <form onSubmit={onSubmit} className="myForm">{children}</form>
    )
}

export default MyForm
