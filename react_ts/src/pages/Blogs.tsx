import React from 'react'
import Blog from '../components/Blog'
import {Link} from 'react-router-dom'

interface Blog {
    title : string ,
    body : string ,
    author : string 
}

const  Blogs : React.FC =  ()  => {
  return (
    <div className='w-screen h-screen px-32 py-10 '>
        <div className='w-full   flex items-center justify-between'><span className='text-2xl font-bold'>Blogs</span> <Link to={'/new'} className="text-sm font-bold text-white bg-sky-400 py-2 px-4 rounded-sm">New Blog</Link></div>

        <hr className='mt-10' /> 
        <div className='flex justify-between flex-wrap'>

        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        </div>
        
    </div>
  )
}

export default Blogs