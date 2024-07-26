import "./App.css";
import Home from "./components/Pages/Home"
import CategoryPage from "./components/Pages/CategoryPage"
import TagPage from "./components/Pages/TagPage"
import BlogPage from "./components/Pages/BlogPage"



import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

import { Routes , Route, useSearchParams, useLocation } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);


  const [searchParams, setSearchParam] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }else if (location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),category);
    }else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname , location.search]);

  return (
    <>
      <Routes>


        <Route path="/" element = {<Home/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
        <Route path="/tags/:tag" element={<TagPage/>} />
        <Route path="/categories/:category" element={<CategoryPage/>} />


      </Routes>
    </>
  );
}
