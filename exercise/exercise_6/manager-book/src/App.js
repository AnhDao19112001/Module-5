import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ManagerBook} from "./components/ManagerBook";
import {CreateManageBook} from "./components/CreateManageBook";
import {UpdateManageBook} from "./components/UpdateManageBook";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Routes>
      <Route path='/' element={<ManagerBook />} />
        <Route path='/add' element={<CreateManageBook />} />
        <Route path='/update/:id' element={<UpdateManageBook />} />
      <Route path='/' element={<ToastContainer/>} />
    </Routes>
  );
}

export default App;
