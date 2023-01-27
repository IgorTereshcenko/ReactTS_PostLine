import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "../../API/PostService";
import { IPosts } from "../../types/IPosts";

interface PostsState {
    posts: IPosts[];
    isLoading: boolean,
    error: string
}

const initialState: PostsState = {
    posts:[],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]:(state, action:PayloadAction<IPosts[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [fetchPosts.pending.type]:(state) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]:(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

const {actions, reducer} = postSlice;

export default reducer;
export const {} = actions;


