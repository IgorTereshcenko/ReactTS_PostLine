import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPost, deletePostsById, editPost, fetchCommentById, fetchPosts, fetchPostsById } from "../../API/PostService";
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
            state.posts.unshift(action.payload)
            state.filterPosts.unshift(action.payload)
            state.post = action.payload
        },
        removePost(state, action:PayloadAction<number>) {
            state.posts = state.posts.filter(post => post.id !== action.payload)
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
        //////////////////////////////////////
        builder.addCase(editPost.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(editPost.fulfilled.type,(state,action:PayloadAction<IPosts>) => {
            state.isLoading = false;
            state.error = '';
            state.post = action.payload;
        })
        builder.addCase(editPost.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        ////////////////////////////////////
        builder.addCase(createPost.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(createPost.fulfilled.type,(state,action:PayloadAction<IPosts>) => {
            state.isLoading = false;
            state.error = '';
        })
        builder.addCase(createPost.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        ////////////////////////////////////
        builder.addCase(deletePostsById.pending.type,(state) => {
            state.isLoading = true;
        })
        builder.addCase(deletePostsById.fulfilled.type,(state,action:PayloadAction<number>) => {
            state.isLoading = false;
            state.error = '';
        })
        builder.addCase(deletePostsById.rejected.type,(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

const {actions, reducer} = postSlice;

export default reducer;
export const {searchPosts, sortedPosts, addPost, removePost} = actions;


