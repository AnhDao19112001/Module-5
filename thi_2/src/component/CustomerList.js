import {useEffect, useState} from "react";
import customerTypeService from "../service/CustomerTypeService";
import customerService from "../service/CustomerService";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [customerType, setCustomerType] = useState([])
    const [object, setObject] = useState({})
    const customerList = async () => {
        const result = await customerService.getAll()
        setCustomers(result)
    }
    const deleteButton = (obj) => {
        setObject(obj);
    }
    const handleDelete = async (id) => {
        try {
            await customerService.remove(id)
            setCustomers(await customerService.getAll())
            toast("Delete success")
        }catch (error){
            toast("Delete fail")
        }
    }

    const customerTypeList = async () => {
        const result = await customerTypeService.getAll()
        setCustomerType(result);
    }

    useEffect(() => {
        customerList();
        customerTypeList();
    }, [])

    return (
        <>
            <h1>Customer List</h1>
            <NavLink to={`/add`}>Create</NavLink>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>price</th>
                    <th>type</th>
                    <th>describe</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((value, key) => (
                        <tr key={key + 1}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td>
                                {
                                    customerType.filter(
                                        (type) => type.idType === parseInt(value.idType)
                                    )[0]?.name
                                }
                            </td>
                            <td>{value.describe}</td>
                            <td>
                                <button type="button" className="btn btn-danger btn-modal" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => deleteButton(value)}>Delete
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
        </>
    )
}

export default CustomerList