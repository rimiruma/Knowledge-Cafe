import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App