const List = ({todoitens, }) => {
    return (  
        <div className="list">
            {todoitens.map((item) => (
                <div className="app" key={item.id}>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
}
 
export default List;