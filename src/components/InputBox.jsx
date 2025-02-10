import React from 'react';

const InputBox = ({ setNewTodo, addTodo, clearAll }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 my-4">
      <input
        type="text"
        name='input'
        id='input'
        className='w-full text-lg p-2 outline-none border-solid rounded-lg max-md:w-1/2 max-sm:w-full drop-shadow-md'
        placeholder="Type here..."
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(evt) => (evt.key === "Enter" && addTodo())}
      />
      <div className="flex w-full sm:w-1/2 gap-2 justify-center items-center">
        <button
          className='w-full bg-gradient-to-br from-blue-300 to-purple-400 p-2 text-lg rounded-md border-solid border border-black transition-all duration-300 ease-in-out hover:from-purple-400 hover:to-blue-300 shadow-md'
          onClick={addTodo}
        >
          Add
        </button>
        <button
          className="w-full p-2 text-lg rounded-md border border-black bg-gradient-to-br from-pink-500 to-red-300 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-red-300 hover:to-pink-500 shadow-md"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  )
}

export default InputBox
