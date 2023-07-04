import React from 'react'
import './style.css'

const BlogsCard = ({blogsImage, blogsName, blogsDescription}) => {
  return (
    <div className='BlogsCard'>
      <img src={blogsImage} alt='Blogs'/>
      <p>{blogsName}</p>
      <p>{blogsDescription}</p>
      <button>Read More</button>
    </div>
  )
}

export default BlogsCard
