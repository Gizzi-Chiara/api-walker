import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';

function App() {
  return (
    <div>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People/>} />
        <Route path='/planets/:id' element={<Planets/>}></Route>
        <Route path='/films/:id' element={<Films/>}></Route>
        <Route path='/species/:id' element={<Species/>}></Route>
        <Route path='/vehicles/:id' element={<Vehicles/>}></Route>
        <Route path='/starships/:id' element={<Starships/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
