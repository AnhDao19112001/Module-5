// import './App.css';
import './StudentCSS/Student.css'
import {students} from "./studentComponent/Student";

export default function App() {
    return (
        <table>
            <h1>Student List</h1>
            <tr>
                <td>company</td>
                <td>contact</td>
                <td>country</td>
            </tr>
            {
                students.map(student => (
                    <tr>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))
            }
        </table>
    );
}



