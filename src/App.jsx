import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [todos, setToDos] = useState([]);

  const handleCreate = (todo) => {
    setToDos((prev) => [...prev, todo]);
  };

  return (
    <div className="container">
      <Form onCreateTask={handleCreate} />
      {/* {todos.length > 0 && <pre>{JSON.stringify(todos, null, 2)}</pre>} */}
      <div className="row p-3 g-3">
        {todos.map((todo) => (
          <Card todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
