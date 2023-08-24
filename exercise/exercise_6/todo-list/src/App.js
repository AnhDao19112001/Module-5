import './App.css';
import TodoList from "./components/TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/todoList' element={<TodoList/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
