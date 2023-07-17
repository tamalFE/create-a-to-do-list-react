import { useState } from 'react';

const Form = ({ onCreateTask, onResetTask }) => {
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
      <form className="py-4" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
              <button
                type="button"
                className="btn btn-danger ms-1"
                onClick={() => onResetTask()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
