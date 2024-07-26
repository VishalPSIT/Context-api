import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { baseUrl, newBaseUrl } from '../../baseUrl';
import Header from '../Header';
import BlogDetails from '../BlogDetails';

const BlogPage = () => {

    const [blog , setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading , loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs); 
        }catch(error){

            console.log("error in blog page");
            setBlog(null);
            setRelatedBlogs([]);

        }
        setLoading(true);
    }

    useEffect(()=>{
        if (blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

        <Header/>
        <div className='mt-[2rem]'>
            <button className='rounded-md border-2 px-4 py-1' onClick={()=> navigation(-1)}>
                Back
            </button>
            {
                loading ? (<p>Loading</p>) : 
                blog ? (
                    <div >
                        <BlogDetails post = {blog}/>
                        <h2>Related Blogs</h2>
                        {
                            relatedBlogs.map((post) => (
                                 <div key={post.id}>
                                    <BlogDetails post={post}/>
                                </div>
                            ))
                        }
                    </div>

                ) :
                (
                    <div>
                        <p>No Blog Found</p>
                    </div>
                )
            }
        </div>
        
    </div>
  )
}

export default BlogPage