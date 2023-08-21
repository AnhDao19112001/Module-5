import './App.css';
import Students from "./components/Students";
import {students} from "./data/Student";
import './index.css';

function App() {
  return (
   <Students list={students}/>
  );
}

export default App;
