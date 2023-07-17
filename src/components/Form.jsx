import { useState } from 'react';

const Form = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      id: Date.now(),
      completed: false,
    };

    onCreateTask(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <form
        className="p-5 row row-cols-lg-auto g-3 align-items-center justify-content-center bg-info"
        onSubmit={handleSubmit}
      >
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
