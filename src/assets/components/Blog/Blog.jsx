
import PropTypes from 'prop-types';
import {FaBookmark } from "react-icons/fa";

const Blog = ({ blog , handleAddBookmarks}) => {
    const { title, cover, author, author_img, reading_time, hashtag, posted_date } = blog;
    return (
        <div className='space-y-5 mt-8'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <img className='w-10 h-10' src={author_img} alt="" />
                    <div >
                        <h3 className="text-3xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p> {reading_time} </p>
                    <button onClick={handleAddBookmarks} 
                    className='text-red-600 text-2xl'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <h3 className="text-2xl">{title}</h3>
            <p>{hashtag} </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.function
}
export default Blog;