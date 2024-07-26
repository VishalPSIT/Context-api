import React from 'react'
import Header from '../Header'
import Blogs from '../Blogs'
import Pagination from '../Pagination'

const Home = () => {
  return (
    <div className="w-full h-full relative flex flex-col gap-y-1 justify-center items-center">
        <Header/>
        <div className=' mt-[2rem]'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home