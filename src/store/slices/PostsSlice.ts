import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "../../API/PostService";
import { IPosts } from "../../types/IPosts";

interface PostsState {
    posts: IPosts[];
    filterPosts: IPosts[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts:[],
    filterPosts:[],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action:PayloadAction<IPosts>) {
            state.filterPosts.unshift(action.payload)
        },
        removePost(state, action:PayloadAction<number>) {
            state.filterPosts = state.filterPosts.filter(post => post.id !== action.payload)
        },
        searchPosts(state, action:PayloadAction<string>) {
            state.filterPosts = state.posts.filter(post => post.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled.type]:(state, action:PayloadAction<IPosts[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
            state.filterPosts = action.payload;
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
export const {addPost, removePost, searchPosts} = actions;


