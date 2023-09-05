import './App.css';
import {Route, Routes} from "react-router";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<ProductList/>}/>
      <Route path={`/create`} element={<CreateProduct/>}/>
      <Route path={`/update/:id`} element={<UpdateProduct/>}/>
    </Routes>
  );
}

export default App;
