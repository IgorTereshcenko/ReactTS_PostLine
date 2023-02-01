import { useMemo } from "react";

export const usePaginationPost = (totalPages:number, page:number) => {

    const paginationPost = useMemo(() => {
        console.log('пагинация')
        let pages = []
        for (let i = 0; i < totalPages; i++) {
            pages.push(i + 1)
        }

        return pages;
        
    },[totalPages, page])

    return paginationPost;
}