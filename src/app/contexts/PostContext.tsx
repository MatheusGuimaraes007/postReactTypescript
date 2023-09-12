import {ReactNode, createContext, useState} from 'react';
import {Post} from '../types/Post'

type PostContextType = {
  posts: Post[];
  addPost: (title: string, body:string) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children}: {children: ReactNode}) => {

  const [posts, setPost] = useState<Post[]>([])

  const addPost = (title: string, body: string) => {
    setPost([
      ...posts,
      {
        id: posts.length,
        title: title,
        body: body,
      }
    ])
  }

  return (
    <PostContext.Provider value={{posts, addPost}}>{children}</PostContext.Provider>
  )
}
