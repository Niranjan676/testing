import React from 'react'
import { Link } from 'react-router-dom'

function Params() {
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
                  <h1 className='text-3xl font-bold underline text-red-500'>useParams</h1>
            </div>
  )
}

export default Params