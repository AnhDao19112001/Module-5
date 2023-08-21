import {Component} from "react";
class Students extends Component {
    render() {
        return(
            <>
                <h1>List Student</h1>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list.map(student =>
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Students;