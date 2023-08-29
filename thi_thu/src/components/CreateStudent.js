import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";
import {createStudent} from "../service/StudentService";


function validateName(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "Ten khong dung dinh dang!");
}
function CreateStudent() {
    const navigate = useNavigate()

    const addStudent = async (student) => {
        const result = createStudent(student);
        console.log(result);
    }

    return (
        <Formik initialValues={{
            name: '',
            dob: '',
            address: ''
        }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Tên không được để trống!")
                        .min(2, "Ten toi thieu la 2 ky tu!")
                        .max(50, "Ten toi da la 50 ky tu!"),
                    dob: Yup.string()
                        .required("Ngay thang nam sinh khong duoc de trong!"),
                    address: Yup.string()
                        .required("Dia chi khong duoc de trong!")
                })}
                onSubmit={async (values) => {
                    await addStudent(values);
                    navigate('/')
                }}>

            <Form>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" vaidate={validateName}/>
                    <ErrorMessage name="name" component="span" style={{color: 'red'}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dob">Date Of Birth</label>
                    <Field type="date" id="dob" name="dob"/>
                    <ErrorMessage name="dob" component="span" style={{color: 'red'}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <Field type="text" id="address" name="address"/>
                    <ErrorMessage name="address" component="span" style={{color: 'red'}}/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default CreateStudent;