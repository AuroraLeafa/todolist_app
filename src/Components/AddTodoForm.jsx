import React from 'react';

function AddTodoForm({ newTodo, setNewTodo, handleSubmit }) {
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      handleSubmit(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="flex">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(event) => setNewTodo(event.target.value)} 
          placeholder="Add new todo" 
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md">
          Add List
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
