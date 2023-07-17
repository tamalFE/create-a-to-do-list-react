const Card = (props) => {
  //   const {
  //     todo: { id, title, completed },
  //   } = props;
  const { todo } = props;
  const { id, title, completed } = todo;

  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-header">Task ID: {id}</div>
        <div className="card-body">
          <h5 className="card-title text-capitalize">{title}</h5>
          {/* <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p> */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check form-check-reverse">
              <input className="form-check-input" type="checkbox" />
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
