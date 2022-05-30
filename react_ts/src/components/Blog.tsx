import React from "react";

const Blog : React.FC = () => {
    return (
        <div className="rounded-sm  shadow-sm p-2 w-[350px]" >
            <h1 className="font-bold">Blog title</h1> 
            <hr className="my-4 border-gray-200"/>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta laboriosam ratione at ducimus fuga veritatis ipsa aspernatur, nam necessitatibus amet. Natus in delectus adipisci iusto earum qui sint vitae?
            Nostrum facere nemo nihil quidem ut vero dolor quam voluptate eligendi exercitationem. Illo doloribus nam ipsam harum neque asperiores ullam odio obcaecati quasi aliquam, unde deleniti architecto tempora numquam! Nulla?</p>
            <p className=" text-right mt-4 w-full italic text-sm text-gray-300">Ndahiro Valens Papy</p>
            
        </div>
    )

}

export default Blog