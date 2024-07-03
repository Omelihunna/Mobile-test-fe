// import { useState } from 'react'
import './App.css'
// import Test from './pages/Test'
import TopNav from './components/TopNav'
import Feed from './pages/Feed'
import NewPost from './pages/NewPost'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row gap-40'>
        <div>
          <TopNav />
          <Feed />
        </div>
        <div>
          <NewPost />
        </div>
      </div>
    </>
  )
}

export default App
