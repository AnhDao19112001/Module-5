import {useEffect, useState} from "react";
import * as service from "../service/StudentService"
import {NavLink} from "react-router-dom";

function StudentList() {
    const [studentsList, setStudentsList] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const result = await service.getAll();
            setStudentsList(result)
        }
        getAll();
    }, [])


    return (
        <>
            <div className="container">
                <h1 style={{textAlign: 'center'}}>Student List</h1>
                <NavLink to={'/create'} className="btn btn-outline-primary" style={{float:'right'}}>Create</NavLink>
                <table className="table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        studentsList.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.dob}</td>
                                <td>{value.address}</td>
                                <td>
                                    <NavLink to={`/edit/${value.id}`} className="btn btn-outline-warning m-1">Update</NavLink>
                                    <button type="submit" className="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentList;