import React from 'react'
import Header from '../Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Blogs';
import Pagination from '../Pagination';

const TagPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <div>
            <button className='rounded-md border-2 px-4 py-1' onClick={() => {navigate(-1)}}>
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage