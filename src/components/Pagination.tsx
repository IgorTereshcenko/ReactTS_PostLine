import React, { FC } from 'react'
import {usePaginationPost} from '../hooks/usePagination'
import '../styles/pagination.scss'

interface IPaginationProps {
    page: number;
    totalPages:number;
    changePage: (page:number) => void;
}

const Pagination:FC<IPaginationProps> = ({page,changePage,totalPages}) => {

    let pagesArray = usePaginationPost(totalPages)

    return (
        <div className='page'>
            {pagesArray.map(p =>
                <span 
                    key={p}
                    onClick={() => changePage(p)} 
                    className={page === p ? 'page__item page__item_active' : 'page__item'}>
                        {p}
                </span>)
            } 
        </div>
    )
}

export default Pagination
