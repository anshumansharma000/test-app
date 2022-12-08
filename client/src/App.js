import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const baseUrl = process.env.NODE_ENV == 'development'? 'http://localhost:8000/api/v1/test' : '/api/v1/test';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={async()=>{console.log(process.env.NODE_ENV); const res = await axios.get(`${baseUrl}`); console.log(res.data.message);}}>Okay</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
