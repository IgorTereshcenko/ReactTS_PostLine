import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ComponentPath } from '../router'

interface IErrorPageProps {
    to:string,
    replace:boolean
}

const ErrorPage:FC<IErrorPageProps> = () => {

    return (
        <div style={{'display': 'flex', 'flexDirection':'column', 'justifyContent': 'center', 'alignItems':'center'}}>
          <iframe src="https://giphy.com/embed/iJCo9daAP0xugHhhfb" width="480" height="347" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p></p>
          <h1>Вы перешли на несуществующую страницу</h1>
          <Link to={ComponentPath.POSTS}>к постам</Link>
        </div>
    )
}

export default ErrorPage
