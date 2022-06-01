import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'

interface data {
    id: string,
    title: string,
    body: string,
    author: string
}

const Singleblog: React.FC<data> = () => {
    const { id  } = useParams()
    const [data,setData] = useState<data[]>([])
    useEffect(() => {

        const fetcher: any = async () => {
            const data = await axios.get(`http://localhost:5000/blogs/{id}`)
            setData(data.data)
          }
          fetcher();
    },[])
    
    if(data.length <= 0) console.log("Nothing found")
    else console.log(data)

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            
        </div>
    )

}


export default Singleblog