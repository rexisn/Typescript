import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";


const Newblog: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = () => {
        navigate('/')
    }

    return (
        <div className="grid grid-cols-2 h-screen ">
            <img src="https://images.unsplash.com/photo-1589185810360-8ea760bb9836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVhZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-contain mx-auto lg:block sm:hidden" />
            <div className="px-10 py-4 ">
                <form onSubmit={handleSubmit}>

                    <h1 className="text-xl font-bold">Create a new blog.</h1>
                    <p className="text-gray-300">Fill in the fiels to create a new blog</p> <br />
                    <input type="text" className="w-full border h-10 px-2" placeholder="Blog title " /> <br />
                    <input type="text" className="w-full border h-10 px-2 mt-2" placeholder="Blog author   (full names)" /> <br />
                    <textarea placeholder="Content of the blog" className="w-full h-[400px] border  mt-2 px-2 py-2"></textarea>
                    <button className="w-full py-2 bg-sky-500 text-white font-semibold border ">Boom</button>

                </form>


            </div>


        </div>
    )

}



export default Newblog