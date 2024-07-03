import './App.css'
import { Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import NewPost from './pages/NewPost'

const App = () => {
  return (    
    <Routes>
      <Route path={"/"} element={<Feed />} />
      <Route path={"/new"} element={<NewPost />} />
    </Routes>
  )
}

export default App
