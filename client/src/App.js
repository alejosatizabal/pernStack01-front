/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App; */

/* export default function App() {
  return (
    <div>
      Hello world
    </div>
  )
} */

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<TaskList/>} /> // Así interpreta a 'TaskList' como un componente */}
        {/* <Route path='/' element={TaskList} /> // Así interpreta a 'TaskList' como una función */}
        <Route path='/' element={<TaskList/>} />

        <Route path='/tasks/new' element={<TaskForm/>} />
        {/* Edit Route */}
      </Routes>
    </BrowserRouter>
  )
}