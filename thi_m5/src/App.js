import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router";
import {ToastContainer} from "react-toastify";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import CreateProduct from "./components/CreateProduct";
function App() {
  return (
      <Routes>
        <Route path={`/`} element={<ProductList />} />
          <Route path={`/edit/:id`} element={<UpdateProduct />} />
          <Route path={`/create`} element={<CreateProduct />} />
          <Route path={`/`} element={<ToastContainer />} />
      </Routes>
  );
}

export default App;
