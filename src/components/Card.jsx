const Card = (props) => {
  //   const {
  //     todo: { id, title, completed },
  //   } = props;
  const { todo, onToggle } = props;
  const { id, title, description, completed } = todo;

  console.log(props);

  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-header">Task ID: {id}</div>
        <div className="card-body">
          <h5
            className={`card-title text-capitalize ${
              completed ? 'text-decoration-line-through' : ''
            }`}
          >
            {title}
          </h5>
          <p
            className={`card-text ${
              completed && 'text-decoration-line-through'
            }`}
          >
            {description}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
              />
              <label>Complete: </label>
            </div>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
