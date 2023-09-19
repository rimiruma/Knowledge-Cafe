import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark }) => {
    const { Title, Cover, Author, Author_Image, Hashtags, Posted_Date, Reading_time } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8'src={Cover} alt={`Cover picture of the title${Title}`}></img>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={Author_Image} alt=''></img>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>Posted_Date</p>
                    </div>
                </div>
                <div>
                    <span>{Reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{Title}</h2>
            <p>
                {
                    Hashtags.map((Hash, idx) => <span key={idx}><a href="">#{Hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,handleAddToBookmark:PropTypes.function
}
export default Blog;