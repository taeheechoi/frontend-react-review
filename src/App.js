import { Routes, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='todo' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
