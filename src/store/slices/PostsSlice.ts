import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCommentById, fetchPosts, fetchPostsById } from "../../API/PostService";
import { IComments } from "../../types/IComments";
import { IPosts } from "../../types/IPosts";

interface PostsState {
    posts: IPosts[];
    filterPosts: IPosts[];
    isLoading: boolean;
    error: string;
    post:IPosts;
    comments: IComments[];
}

const initialState: PostsState = {
    posts:[],
    filterPosts:[],
    isLoading: false,
    error: '',
    post:{id: 0, title: '', body: ''},
    comments:[]
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
        },
        sortedPosts(state,action:PayloadAction<'title' | 'body'>) {
            state.filterPosts = state.posts.sort((a, b) => {
                if (typeof a[action.payload] === 'string' && typeof b[action.payload] === 'string')
                return a[action.payload].localeCompare(b[action.payload])
                return 0
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled.type,(state,action:PayloadAction<IPosts[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
            state.filterPosts = action.payload;
        })
        builder.addCase(fetchPosts.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        ///////////////////////////////////////
        builder.addCase(fetchPostsById.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPostsById.fulfilled.type,(state,action:PayloadAction<IPosts>) => {
            state.isLoading = false;
            state.error = '';
            state.post = action.payload
        })
        builder.addCase(fetchPostsById.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        //////////////////////////////////////
        builder.addCase(fetchCommentById.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCommentById.fulfilled.type,(state,action:PayloadAction<IComments[]>) => {
            state.isLoading = false;
            state.error = '';
            state.comments = action.payload;
        })
        builder.addCase(fetchCommentById.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

const {actions, reducer} = postSlice;

export default reducer;
export const {addPost, removePost, searchPosts, sortedPosts} = actions;


