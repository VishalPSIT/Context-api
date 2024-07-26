import React from 'react'
import Header from '../Header'
import Blogs from '../Blogs'
import Pagination from '../Pagination'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
        <Header/>
        <div className='w-[560px] mt-[70px] mb-3'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home