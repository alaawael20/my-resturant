import React from 'react'
import Title from './../../../../Mock/Title';
import './style.css'
import BlogsCard from '../../../../Mock/BlogsCard';
import blog1 from '../../../../assets/blogs1.png'
import blog2 from '../../../../assets/blogs2.png'
import blog3 from '../../../../assets/blogs3.png'

const Blogs = () => {
  return (
    <div className='Blogs' id='Blogs'>
      <Title title='Blogs' subTitle='words from our food lovers'/>
      <div className='BlogsCards'>
        <BlogsCard blogsImage={blog1} blogsName='Cooking Dining Experience' blogsDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
        <BlogsCard blogsImage={blog2} blogsName='Cooking Dining Experience' blogsDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
        <BlogsCard blogsImage={blog3} blogsName='Cooking Dining Experience' blogsDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
      </div>
    </div>
  )
}

export default Blogs
