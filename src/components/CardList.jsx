import Card from './Card';

const CardList = ({ todos, onToggle }) => {
  return (
    <div>
      <h3 className="mt-1">All Tasks</h3>
      <div className="row p-3 g-3">
        {todos.map((todo) => (
          <Card todo={todo} onToggle={onToggle} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
