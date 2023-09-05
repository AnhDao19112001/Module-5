import {useEffect, useState} from "react";
import productService from "../service/ProductService"
import productTypeService from "../service/ProductTypeService"
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

function ProductList() {
    const [productList, setProductList] = useState([])
    const [productType, setProductType] = useState([])
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        getAll();
        getAllList();
    }, [])

    const getAll = async () => {
        const getAllData = await productService.getAll()
        setProductList(getAllData)
    }
    const getAllList = async () => {
        const getAllListData = await productTypeService.findAll()
        setProductType(getAllListData)
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value)
    }

    const search = () => {
        alert(inputValue);
    }

    return (
        <>
            <h1>Product List</h1>
            <NavLink to={`/create`} className='btn btn-outline-primary'>Create</NavLink>
            <input type="text" placeholder="search" id="search-input" onChange={handleChange}/><button onClick={search}>Search</button>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>TYPE</th>
                    <th>DETAIL</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    productList.map((value, key) => (
                        <tr key={key}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.price}</td>
                            <td>
                                {
                                    productType.filter(
                                        (type) => type.id === parseInt(value.idType)
                                    )[0]?.name
                                }
                            </td>
                            <td>{value.detail}</td>
                            <NavLink to={`/update/${value.id}`} className='btn btn-outline-warning'>Update</NavLink>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default ProductList;