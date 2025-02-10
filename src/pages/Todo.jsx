import React, { useEffect, useState } from 'react';
import InputBox from '../components/InputBox';
import Table from '../components/Table';

function Todo() {
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
      let newTodoObj = [newTodo, false]
      setTodos([...todos, newTodoObj]);
      setNewTodo('');
      document.getElementById('input').value = '';
    }
  }

  const updateTodo = (index, val) => {
    const newTodos = JSON.parse(localStorage.getItem('todos'));
    if (val)
      newTodos[index][1] = true;
    else
      newTodos[index][1] = false;
    setTodos(newTodos);
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
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center min-h-screen min-w-full items-center py-10 select-none montserrat_alternates_font backdrop-blur-3xl'>
        <h1 className="text-5xl font-bold p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text_outline drop-shadow-md shadow-red-600 text-center">
          To Do List
        </h1>
        <div className='content mx-4 w-11/12 lg:w-2/3 xl:w-1/2'>
          <InputBox
            setNewTodo={setNewTodo}
            addTodo={addTodo}
            clearAll={clearAll}
          />
          {todos.length === 0
            ? (
              <h3 className="font-medium playwrite_in_font text-2xl md:text-3xl text-center text-white pt-12">
                Add To-Do-List Now!
              </h3>
            ) : (
              <Table
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Todo
