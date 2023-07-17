import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

const App = () => {
  const [todos, setToDos] = useState([]);

  const handleCreate = (todo) => {
    setToDos((prev) => [...prev, todo]);
  };

  const handleToggle = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index <= -1) return;

    const copiedTodos = [...todos];

    copiedTodos[index].completed = !copiedTodos[index].completed;

    setToDos(copiedTodos);
  };

  const handleDelete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index <= -1) return;

    const copied = [...todos];

    copied.splice(index, 1);

    setToDos(copied);
  };

  const handleResetTasks = () => {
    setToDos([]);
  };

  return (
    <div>
      <Navbar />
      <Form onCreateTask={handleCreate} onResetTask={handleResetTasks} />
      <CardList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
