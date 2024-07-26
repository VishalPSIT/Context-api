import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='justify-center items-center' >
        <NavLink to={`/blog/${post.id}`} >
            <span className='text-xl font-black underline' >{post.title}</span>
        </NavLink>
        <p className='mt-1 text-xs'>
            By:   
            <span className='font-extrabold italic'>{" " + post.author}</span> on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='font-black italic'>{post.category}</span>
            </NavLink>
        </p>

        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <p>
            {
                post.tags.map((tag,index) => {
                    return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                })
            }
        </p>

    </div>
  )
}

export default BlogDetails