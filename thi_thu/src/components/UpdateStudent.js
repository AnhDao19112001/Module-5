import {useNavigate, useParams} from "react-router-dom";
import {detailStudent, updateStudent} from "../service/StudentService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useEffect, useState} from "react";

function validateNames(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "Ten khong dung dinh dang!");
}

function UpdateStudent() {
    const navigate = useNavigate()
    const param = useParams()
    const [students, setStudents] = useState()

    const loadStudentDetail = async (id) => {
        const data = await detailStudent(id);
        setStudents(data)
    }

    const handelSubmit = async (id,student) => {
        await updateStudent(id,student);
        navigate('/')
    }

    useEffect(() => {
        if (param.id) {
            loadStudentDetail(param.id)
        }
    }, [param])

    if (!students) {
        return null;
    }

    return (
        <Formik initialValues={{
            id: students?.id,
            name: students?.name,
            dob: students?.dob,
            address: students?.address
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
                onSubmit={(values) => {
                    handelSubmit(param.id,values);
                }}>

            <Form>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" validate={validateNames}/>
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

export default UpdateStudent;