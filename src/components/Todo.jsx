const Todo = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
