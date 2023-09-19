import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blog from './components/Blog/Blog'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks);
}

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
