import React from 'react'
import Todos from '../components/Todos'

function Todo() {
  return (
    <>
      <div className='inset-0  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
        <div className='inset-0 bg-white/15 backdrop-blur-md'>
          <Todos />
        </div>
      </div>
    </>
  )
}

export default Todo
