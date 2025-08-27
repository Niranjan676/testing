import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function State() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [newName, setNewName] = useState([])

    const increase = () =>{
        setCount(count + 1)
    }



    const handleUpdate = () =>{
        let namecopy = [...newName]
        namecopy.push(name)
        setNewName(namecopy)
        setName("")
        }

  return (
    <div className='title'>
        <ul className='mt-3 ml-5 flex items-center justify-center gap-3 mt-4'>
            <li className='my-list-item'><Link to="/">UseState</Link></li>
            <li className='my-list-item'><Link to="/Effect">UseEffect</Link></li>
            <li className='my-list-item'><Link to="/Memo">UseMemo</Link></li>
            <li className='my-list-item'><Link to="/Callback">UseCallback</Link></li>
            <li className='my-list-item'><Link to="/Ref">UseRef</Link></li>
            <li className='my-list-item'><Link to="/Reducer">UseReducer</Link></li>
            <li className='my-list-item'><Link to="/Params">UseParams</Link></li>
            <li className='my-list-item'><Link to="/Navigate">UseNavigate</Link></li>
        </ul>
        <h1 className='text-3xl font-bold underline text-red-500'>useState</h1>
        <div>
            <h3>Example 1</h3>
            <h4>Count: {count}</h4>
            <button onClick={increase} className='btn'>Increse</button>
        </div>
        <div>
            <h3>Example 2</h3>
            <h4>Hello {newName}</h4>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleUpdate} className='btn'>Update name</button>
        </div>
    </div>
  )
}

export default State