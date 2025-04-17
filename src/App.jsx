import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//importo il layout dove dentro c'è la logoca della navbar
import DefaultLayout from './components/DefaultLayout'
//importo le pagine
import HomePage from './pages/Home'
import AboutUs from './pages/About'
import PostList from './pages/PostList'
import Post from './pages/Post'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/" Component={HomePage} /> */}
          <Route path="about" element={<AboutUs />} />
          <Route path="posts" element={<PostList />} />
          //rotta per post
          <Route path="posts/:postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
