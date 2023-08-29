import './App.css';
import {Route, Routes} from "react-router-dom";
import StudentList from "./components/StudentList";
import CreateStudent from "./components/CreateStudent";
import 'bootstrap/dist/css/bootstrap.css';
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentList />}/>
      <Route path="/create" element={<CreateStudent />}/>
      <Route path="/edit/:id" element={<UpdateStudent />}/>
    </Routes>
  );
}

export default App;
