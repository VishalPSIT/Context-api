import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[160px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            By 
            <span>{post.author}</span> on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>

        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <p>
            {
                post.tags.map((tag) => {
                    <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                })
            }
        </p>

    </div>
  )
}

export default BlogDetails