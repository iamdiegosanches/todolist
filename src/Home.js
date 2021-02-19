import { useState } from "react";
import List from "./List";

const Home = () => {
  const [list, setList] = useState([
    { value: 'Learn React', id: 1 },
    { value: 'this is whrong', id: 2 },
    { value: 'aaaaaaaa', id: 3 }
  ])

  const handleDelete = (id) => {
    const newList = list.filter(list => list.id !== id);
    setList(newList);
  }

  const handleAdd = () => {
    const newList = list.concat();
    setList(newList);
  }

  return (
    <div className="home">
      <List list={list} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;