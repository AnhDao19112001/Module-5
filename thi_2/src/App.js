import './App.css';
import {Route, Routes} from "react-router";
import CustomerList from "./component/CustomerList";
import CreateCustomer from "./component/CreateCustomer";

function App() {
    return (
        <Routes>
            <Route path={`/`} element={<CustomerList/>}/>
            <Route path={`/add`} element={<CreateCustomer/>}/>
        </Routes>
    );
}

export default App;
