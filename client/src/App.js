import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Appointments from './Pages/Appointments';
import Add from './Pages/Add';
import Update from './Pages/Update';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Appointments/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/update' element={<Update/>}></Route>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
