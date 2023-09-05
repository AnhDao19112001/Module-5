import {useEffect, useState} from "react";
import * as productService from "../service/ProductService";
import {toast, ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([])
    const [object, setObject] = useState({})
    const getAllProduct = async () => {
        const result = await productService.getAll();
        setProducts(result);
        console.log(result)
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    const deleteButton = (obj) => {
        setObject(obj);
    }
    const handleDelete = async (id) => {
        try {
            await productService.remove(id)
            setProducts(await productService.getAll())
            toast("Delete success")
        }catch (error){
            toast("Delete fail")
        }
    }

    return(
        <>
            <h1 style={{textAlign: 'center'}}>Đại lý chi phối quần áo clothing</h1>
            <NavLink to={`/create`} className={"btn btn-outline-primary"}>Them moi</NavLink>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                { products.map((value, key) => (
                    <tr key={key + 1}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.dateOfBirth}</td>
                        <td>{value.quantity}</td>
                        <td>{value.productType.name}</td>
                        <td>
                            <NavLink to={`/edit/${value.id}`} className={'btn btn-outline-warning mx-3'}>Chỉnh sửa</NavLink>
                            <button type="button" className="btn btn-outline-danger btn-modal" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => deleteButton(value)}>Xóa
                            </button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>

            <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to delete {object.title} ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                    onClick={() => handleDelete(object.id)}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
export default ProductList;