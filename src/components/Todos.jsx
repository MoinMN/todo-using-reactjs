import React, { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      let newTodoObj = [
        newTodo,
        false
      ]
      setTodos([...todos, newTodoObj]);
      setNewTodo('');
      document.getElementById('input').value = '';
    }
  }

  const updateTodo = (index, val) => {
    let todoList = localStorage.getItem('todos');
    todoList = JSON.parse(todoList);
    if (val)
      todoList[index][1] = true;
    else
      todoList[index][1] = false;
    setTodos(todoList);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  const clearAll = () => {
    localStorage.clear();
    setTodos([]);
  }

  return (
    <>
      <div className='container flex flex-col justify-center min-h-screen min-w-full items-center bg-white border border-black'>
        <h1 className='text-5xl font-bold p-4'>To Do List</h1>
        <div className='content w-1/2'>
          <div className="input-box flex justify-around items-center p-2 gap-6 my-5">
            <input
              type="text"
              name='input'
              id='input'
              className='w-full text-lg p-1 outline-none border-solid border-2 border-black rounded-lg' placeholder="Type here..."
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(evt)=>(evt.key === "Enter" && addTodo())}
            />
            <div className="btns flex justify-center items-center gap-2">
              <button className='w-24 bg-amber-100 p-1 text-lg rounded-md border-solid border-2 border-black' onClick={addTodo}>Add</button>
              <button className='w-24 bg-amber-100 p-1 text-lg rounded-md border-solid border-2 border-black hover:bg-red-500 hover:text-white' onClick={clearAll}>Clear All</button>
            </div>
          </div>
          <table className='min-w-full bg-white shadow-lg border-collapse border-2 border-gray-200 text-lg text-left'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='border border-gray-300 px-2 py-2 text-center w-16'>Sr. No.</th>
                <th className='border border-gray-300 px-4 py-2'>To Do</th>
                <th className='border border-gray-300 px-4 py-2 text-center w-24'>Status</th>
                <th className='border border-gray-300 px-4 py-2 text-center w-24'>Action</th>
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
                  <td className='border border-gray-300 px-4 py-2 flex justify-center space-x-4'>
                    <input
                      type="checkbox"
                      name="checkboxBtnName"
                      className='cursor-pointer transform scale-125'
                      onChange={(e) => updateTodo(index, e.target.checked)}
                      checked={todo[1]}
                    />
                    <span className='cursor-pointer text-red-500 hover:text-red-700' onClick={() => deleteTodo(index)}>
                      <i className="fa-solid fa-trash" aria-hidden="true"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Todos
