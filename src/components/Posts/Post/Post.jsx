import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
  const {posts} = useSelector(state => state.posts)

  return (
    <div>Post
      {posts.map(post => <p key={post.id}>  Title: {post.title} <br/> Body: {post.body}</p>  )}


      {/* {posts?.map(post => console.log(post.title))}
      {posts?.map(post => console.log(post.body))} */}
    </div>

  )
}

export default Post