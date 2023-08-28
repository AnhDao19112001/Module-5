import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DELETE_USER } from "../redux/Action";
function ManageUser() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isShow, setIsShow] = useState(false);
    const [userDelete, setUserDelete] = useState({});
    const handleDeleteUser =  (id) => {
        dispatch({ type: "DELETE_USER", payload: id });
    };
    return (
        <>
            <h1>User list</h1>
            <button
                onClick={() => {
                    dispatch({ type: "FETCH_USER" });
                    setIsShow((prev) => !prev);
                }}
            >
                Get users
            </button>
            {isShow && (
                <table className="table">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            handleShow();
                                            setUserDelete(user);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắc muốn xóa {userDelete.name} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleDeleteUser(userDelete.id);
                            handleClose();
                        }}
                    >
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ManageUser;