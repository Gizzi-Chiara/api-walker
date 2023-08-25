import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People/>} />
        <Route path='/planets/:id' element={<Planets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
