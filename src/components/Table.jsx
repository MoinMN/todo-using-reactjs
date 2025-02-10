import React from "react";

const Table = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <table className='min-w-full bg-white shadow-lg border-collapse border-2 border-gray-200 text-lg    text-left max-sm:text-base max-md:w-1/2 rounded-lg overflow-hidden'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='border border-gray-300 px-2 py-2 text-center max-md:p-1 max-md:w-10' style={{ width: "12%" }}>
            Sr. No.
          </th>
          <th className='border border-gray-300 px-4 py-2 max-md:p-1' style={{ width: "60%" }}>
            To Do
          </th>
          <th className='border border-gray-300 px-4 py-2 text-center w-24 max-md:p-1 max-md:w-10' style={{ width: "15%" }}>
            Status
          </th>
          <th className='border border-gray-300 px-4 py-2 text-center w-24 max-md:p-1 max-md:w-10' style={{ width: "15%" }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 hover:cursor-pointer`}>
            <td className='border border-gray-300 px-2 py-2 text-center'>{index + 1}</td>
            <td className={`border border-gray-300 px-4 py-2 ${todo[1] && 'line-through text-gray-500'}`} id={`text-${index}`}>
              {todo[0]}
            </td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              {todo[1] ? (
                <span className='text-green-600 font-semibold'>Completed</span>
              ) : (
                <span className='text-red-600 font-semibold'>Pending</span>
              )}
            </td>
            <td className='border px-4 py-2'>
              <input
                type="checkbox"
                name="checkboxBtnName"
                className='cursor-pointer mx-2 max-md:mx-1'
                onChange={(e) => updateTodo(index, e.target.checked)}
                checked={todo[1]}
              />
              <span
                className='cursor-pointer mx-2 text-red-500 hover:text-red-700 max-md:mx-1'
                onClick={() => deleteTodo(index)}
              >
                <i className="fa-solid fa-trash" aria-hidden="true"></i>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
