import './App.css'
import Home from './pages/Home'
import Newblog from './pages/Newblog'
import {BrowserRouter, Route , Routes ,Link} from 'react-router-dom'
import Blogs from './pages/Blogs'

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route path='/blogs' element={<Blogs />}/>
        <Route  path='/' element = {<Home />}/>
        <Route  path='/new' element = {<Newblog />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
