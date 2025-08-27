import React from 'react'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Effecet from './components/Effecet'
import Memo from './components/Memo'
import Callback from './components/Callback'
import Ref from './components/Ref'
import Reducer from './components/Reducer'
import Params from './components/Params'
import Navigate from './components/Navigate'

function App() {
  return (
    <div className='bg-red-500 min-h-screen'>
      <h1 className='text-center text-white text-4xl font-bold'>React Hooks</h1>
      <hr className='mt-3'/>
      <Routes>
        <Route path='/' element={<State />}/>
        <Route path='/Effect' element={<Effecet />}/>
        <Route path='/Memo' element={<Memo />} />
        <Route path='/Callback' element={<Callback />} />
        <Route path='/Ref' element={<Ref />} />
        <Route path='/Reducer' element={<Reducer />} />
        <Route path='/Params' element={<Params />} />
        <Route path='/Navigate' element={<Navigate />} />
      </Routes>
    </div>
  )
}

export default App