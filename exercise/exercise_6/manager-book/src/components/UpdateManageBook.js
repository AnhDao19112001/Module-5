import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as service from "../service/BookManagerService";

export function UpdateManageBook() {
    let param = useParams()
    const [book, setBook] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        const getBookId = async () => {
            const result = await service.getById(param.id)
            setBook(result);
        }
        getBookId();
    }, [param.id])
    if (!book) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: book?.id,
                title: book?.title,
                quantity: book?.quantity
            }}
                    onSubmit={(values) => {
                        const update = async () => {
                            console.log(values)
                            try {
                                await service.updateBook(values,values.id)
                                toast(`Update success!`)
                                navigate("/")
                            } catch (error) {
                                toast(`Update ${values.title} fail`)
                            }
                        };
                        update();
                    }}>
                <div className="container">
                    <h1>Chỉnh sửa</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nameInput">Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="nameInput"
                                name='title'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantityInput">Quantity</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="quantityInput"
                                name='quantity'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
