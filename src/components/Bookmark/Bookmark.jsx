import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
const {Title} = bookmark;
  return (
   <div>
    <h3 className='text-3xl'>{Title}</h3>
   </div>
);
}
   

Bookmark.propTypes = {
  bookmarks:PropTypes.object
}

export default Bookmark