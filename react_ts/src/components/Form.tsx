import React from 'react'


const Form : React.FC = () =>  {
  return (
    <div>
        <input type="text"  placeholder='Task'/> <br />
        <input type="number" placeholder='Deadline' /> <br />
    </div> 
  )
}

export default Form