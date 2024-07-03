import {createContext, useContext, useState} from 'react';
import { getTestPosts } from "../constants/constants";

interface IPostContext {
    getPosts: () => any,
    addPost: (data: any) => any,
}

const PostContext = createContext<IPostContext>({getPosts: () => null, addPost: ({}) => null});


export function usePostContext() {
    return useContext(PostContext);
}

export default function PostProvider({ children }: any) {
    const [posts, setPosts] = useState(getTestPosts());
    const addPost = (data: any) => {
        setPosts(prev => [...prev, data])
    }
    const getPosts = () => {
        return posts
    };


    return (
        <PostContext.Provider value={{addPost, getPosts}}>
            {children}
        </PostContext.Provider>
    );
}
