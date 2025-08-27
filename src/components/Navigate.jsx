import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigate() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  const increase = () =>{
    setCount(count + 1)
  }

  const decrease = () =>{
    setCount(count - 1)
  }

  if(count > 5){
    navigate('/')
  }else if(count < 0){
    alert("Count should be lessthan 0")
    setCount(0)
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
              <h1 className='text-3xl font-bold underline text-red-500'>useNavigate</h1>
              <div>
                  <h3>{count}</h3>
                  <button onClick={increase} className='btn mr-3'>Increase count</button>
                  <button onClick={decrease} className='btn'>Decrease count</button>
              </div>
        </div>
  )
}

export default Navigate