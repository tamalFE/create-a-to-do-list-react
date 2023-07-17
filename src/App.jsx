import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';

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

  return (
    <div className="container">
      <Form onCreateTask={handleCreate} />
      <CardList todos={todos} onToggle={handleToggle} />
    </div>
  );
};

export default App;
