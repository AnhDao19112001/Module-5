import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ManagerBook} from "./components/ManagerBook";
import {CreateManageBook} from "./components/CreateManageBook";
import {UpdateManageBook} from "./components/UpdateManageBook";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ManagerBook />} />
        <Route path='/add' element={<CreateManageBook />} />
        <Route path='/update' element={<UpdateManageBook />} />
    </Routes>
  );
}

export default App;
