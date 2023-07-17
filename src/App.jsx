import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const App = () => {
  const [todos, setToDos] = useState([]);

  const handleCreate = (todo) => {
    setToDos((prev) => [...prev, todo]);
  };

  return (
    <div className="container">
      <Form onCreateTask={handleCreate} />

      <CardList todos={todos} />
    </div>
  );
};

export default App;
