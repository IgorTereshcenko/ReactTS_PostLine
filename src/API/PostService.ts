import axios from "axios";
import { IPosts } from "../types/IPosts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IComments } from "../types/IComments";

export const fetchPosts = createAsyncThunk(
    'posts/fetchAll',
        async ({limit, page}:{limit:number, page:number}) => {
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
                    return e.message;
                }
            }
        }
)

export const fetchPostsById = createAsyncThunk(
    'posts/fetchById',
        async (id:string | undefined) => {
            try {
                const response = await axios.get<IPosts>('https://jsonplaceholder.typicode.com/posts/' + id);

                return response.data;

            } catch(e) {
                if (e instanceof Error) {
                    return e.message;
                }
            }
        }
)

export const fetchCommentById = createAsyncThunk(
    'comment/fetchById',
        async (id:string | undefined) => {
            try {
                const response = await axios.get<IComments[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

                return response.data;

            } catch(e) {
                if (e instanceof Error) {
                    return e.message;
                }
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