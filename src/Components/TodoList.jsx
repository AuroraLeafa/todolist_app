import React from 'react';

function TodoList({ list, handleDelete }) {
  return (
    <div className="space-y-2">
      {list.map((todo, idx) => (
        <div key={idx} className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow">
          <p className="text-lg text-gray-700">{todo}</p>
          <button 
            onClick={() => handleDelete(idx)} 
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
