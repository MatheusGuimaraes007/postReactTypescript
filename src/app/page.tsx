"use client"

import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { PostProvider } from './contexts/PostContext';
import PostList from './components/PostList';

const Page = () => {
  return (
   <PostProvider>
    <div className='container mx-auto'>
      <Header />
      <PostList />
      <Footer />
    </div>
   </PostProvider>
  )
}

export default Page;
