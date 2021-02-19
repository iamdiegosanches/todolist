const List = ({ list, value, handleDelete }) => {
    return (
      <div className="list">
        <h2>To do list</h2>
        {list.map(item => (
          <div className="list-preview" key={item.id} >
            <p onClick={() => handleDelete(item.id)}>{ item.value }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default List