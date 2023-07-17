import { useState } from 'react';

const Form = ({ onCreateTask }) => {
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: text,
      id: Date.now(),
      completed: false,
    };

    onCreateTask(newTodo);
    setText('');
  };

  return (
    <div>
      <form
        className="p-5 row row-cols-lg-auto g-3 align-items-center justify-content-center bg-info"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <label className="visually-hidden">Task:</label>

          <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
