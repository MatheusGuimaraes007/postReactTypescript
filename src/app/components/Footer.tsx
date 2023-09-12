import React, { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

function Footer() {

  const postCtx = useContext(PostContext);

  return (
    <footer>
      Total de posts: {postCtx?.posts.length}
    </footer>
  )
}

export default Footer
