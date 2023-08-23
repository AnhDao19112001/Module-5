// import './App.css';
import './StudentCSS/Student.css'
import {students} from "./data/Student";

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
                students.map((element, key) => {
                    return (<tr key={key + 1}>
                        <td>{element.company}</td>
                        <td>{element.contact}</td>
                        <td>{element.country}</td>
                    </tr>)
                })
            }
        </table>
    );
}



