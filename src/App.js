import React, {useState, useEffect} from 'react';
import Loader from './Loader';
import './App.css';

function App(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async ()=>{
      try
      {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        setTodos(json);
        setLoading(false);
      }catch(e){setError(true)}
    };
    fetchData();
  }, []);

  const el = todos.map(todo=><li key={todo.id}>{todo.title}</li>);
  
  return(
    <>
      {
        error?
        <div>Something Went wrong</div>:
        (loading?
          <Loader/>:        
          <ul>{el}</ul>)
      }
    </>);
}

export default App;
