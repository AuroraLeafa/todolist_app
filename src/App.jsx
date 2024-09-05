import { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [list, setList] = useLocalStorage('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (newTodoItem) => {
    if (!list.includes(newTodoItem)) {
      setList([...list, newTodoItem]);
    }
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, idx) => idx !== index);
    setList(updatedList);
  };

  const handleReset = () => {
    setList([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mt-4 text-blue-600">Todo List App</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <AddTodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleSubmit={handleSubmit} />
        <TodoList list={list} handleDelete={handleDelete} />
        <button 
          onClick={handleReset} 
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Reset All
        </button>
      </div>
    </div>
  );
}

export default App;
