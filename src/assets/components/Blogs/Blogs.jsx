import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmarks}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
           .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map((blog, idx) => <Blog blog={blog}
                key={idx}
                handleAddBookmarks={handleAddBookmarks}
                ></Blog> )
            }
        
        </div>
    );
};

export default Blogs;