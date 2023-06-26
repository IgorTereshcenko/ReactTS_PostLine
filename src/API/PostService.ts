import axios from "axios";
import { IPosts } from "../types/IPosts";
import { createAsyncThunk, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { IComments } from "../types/IComments";
import { addPost, removePost } from "../store/slices/PostsSlice";


export const fetchPosts = createAsyncThunk(
    'posts/fetchAll',
        async ({limit, page}:{limit:number | string, page:number},thunkAPI) => {
            try {
                const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts',{
                    params: {
                        _limit:limit,
                        _page:page
                    }
                });

                return response.data;
                
            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)

export const fetchPostsById = createAsyncThunk(
    'posts/fetchById',
        async (id:string | undefined,thunkAPI) => {
            try {
                const response = await axios.get<IPosts>('https://jsonplaceholder.typicode.com/posts/' + id);

                return response.data;

            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)

export const fetchCommentById = createAsyncThunk(
    'comment/fetchById',
        async (id:string | undefined,thunkAPI) => {
            try {
                const response = await axios.get<IComments[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

                return response.data;

            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)

export const fetchTotalCount = async (limit = 10, page = 1) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                _limit:limit,
                _page:page
            }
        });
        return response.headers['x-total-count']
    } catch(e) {
        if (e instanceof Error) {
            return e.message
        }
    }
}

export const createPost = createAsyncThunk(
    'posts/addPost',
        async (data:IPosts,thunkAPI) => {
            try {
                const response = await axios.post<IPosts>(`https://jsonplaceholder.typicode.com/posts/`, data)

                thunkAPI.dispatch(addPost(response.data))
                return response.data;
                
            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)

export const editPost = createAsyncThunk(
    'posts/editPost',
        async ({ id, newBody, newTitle }: { id: number; newBody: string; newTitle: string },thunkAPI) => {
            try {
                const response = await axios.put<IPosts>(`https://jsonplaceholder.typicode.com/posts/${id}`, 
                {
                    title: newTitle,
                    body: newBody
                })

                return response.data;
                
            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)

export const deletePostsById = createAsyncThunk(
    'posts/deletePostsById',
        async (id:number,thunkAPI) => {
            try {
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
                
                thunkAPI.dispatch(removePost(id))
                return response.data;

            } catch(e) {
                if (e instanceof Error) {
                    return thunkAPI.rejectWithValue(e.message)
                } return String(e)
            }
        }
)