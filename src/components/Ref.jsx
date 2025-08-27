import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Ref() {
  const [count, setCount] = useState(0)

  const reference = useRef(0)

  function handleclick(){
    setCount(count + 1)
  }

  function referenceClick(){
    reference.current.focus()
  }

  console.log("Rendering, check console")

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
                      <h1 className='text-3xl font-bold underline text-red-500'>useRef</h1>
                    <div className='mb-7'>
                      <h1>Updating state</h1>
                      <h4>{count}</h4>
                    </div>
                    <hr />
                    <div className='mt-7'>
                      <h1>UseRef</h1>
                      <input type='text' ref={reference}></input>
                    </div>
                    <div>
                      <button onClick={handleclick} className='btn mr-3'>State Increase</button>
                      <button onClick={referenceClick} className='btn'>Reference focus</button>
                      <p>useState is used to re-render the components, where as useRef is used to Mutate values and accessing DOM elements in direct</p>
                    </div>
                </div>
  )
}

export default Ref