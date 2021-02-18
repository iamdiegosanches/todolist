import List from './List';
import useFetch from './useFetch';

const Home = () => {
    const {data, error} = useFetch('http://localhost:8000/todoitens');
    return (  
        <div className="home">
            <h2>Todo list</h2>
            { error && <div>{ error }</div>}
            {data && <List todoitens={data} />}
        </div>
    );
}
    
export default Home;