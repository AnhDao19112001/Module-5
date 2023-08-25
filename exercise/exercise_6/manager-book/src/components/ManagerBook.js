import {useEffect, useState} from "react";
import * as service from "../service/BookManagerService";
import React from "react";
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {Button, Modal} from "bootstrap";

export function ManagerBook() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getAll = async () => {
            try {
                const result = await service.getAll()
                setBook(result)
            } catch (error) {
                console.log('error')
            }
        }
        getAll();
    }, [])

    // lấy tên của đối tượng để xóa
    // const [nameDelete, setNameDelete] = useState("")
    // lấy id của đối tượng để xóa
    // const [idDelete, setIdDelete] = useState(0)
    //const deleteButton = (id, title) => {
    //    setNameDelete(id);
    //    setNameDelete(title);
    //}


    // state đối tượng để xóa
    const [object, setObject] = useState({})
    const deleteButton = (obj) => {
        setObject(obj);
    }

    const handleDelete = async (id) => {
        try {
            await service.deleteBook(id);
            setBook(await service.getAll())
            toast(`Delete ${book.title} success!`)
        } catch (error) {
            toast(`Delete ${book.title} fail!`)
        }
    }

    return (
        <>
            <div className='container'>
                <h1 style={{textAlign: 'center'}}>Library</h1>
                <button className="btn btn-primary btn-add"><NavLink to={'/add'} className='nav-link'>Create</NavLink>
                </button>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {book.map((value, key) => (
                        <tr key={key}>
                            <td>{value.title}</td>
                            <td>{value.quantity}</td>
                            <td>
                                <button>
                                    <NavLink className='nav-link' to={`/update/${value.id}`}> Chỉnh sửa</NavLink>
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => deleteButton(value)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
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
                                        onClick={() => handleDelete(object.id)}>Delete</button>
                            </div>
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
