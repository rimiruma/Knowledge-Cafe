import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.proTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;