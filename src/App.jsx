
import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([])

  const handleAddBookmarks = blog =>{
    console.log ("added bookmark", blog )
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs> 
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
