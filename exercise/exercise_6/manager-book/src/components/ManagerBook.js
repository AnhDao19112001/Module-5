import {useEffect, useState} from "react";
import * as service from "../service/BookManagerService";
import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

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
    const handleDelete = async (id,book) => {
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
                <h1>Library</h1>
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
                                    <NavLink className='nav-link' to={'/update/' + book.id}> Chỉnh sửa</NavLink>
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(book.id,book)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
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
