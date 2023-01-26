import axios from "axios";
import { IPosts } from "../types/IPosts";
import { AppDispatch } from "../store";
import { 
        postsFetching,
        postsFetchingSuccess,
        postsFetchingError
    } from "../store/slices/PostsSlice";

export const fetchPosts = (limit = 10, page = 1) => async (dispatch:AppDispatch) => {
    try {
        dispatch(postsFetching());
            const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts',{
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            dispatch(postsFetchingSuccess(response.data));
    } catch(e) {
        if(e instanceof Error) {
            return dispatch(postsFetchingError(e.message));
        }
    }
}
