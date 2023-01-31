import React, { FC } from 'react'

interface IErrorPageProps {
    to:string,
    replace:boolean
}

const ErrorPage:FC<IErrorPageProps> = () => {

    return (
      <div>
        <h1>Вы перешли на несуществующую страницу</h1>
      </div>
    )
}

export default ErrorPage
