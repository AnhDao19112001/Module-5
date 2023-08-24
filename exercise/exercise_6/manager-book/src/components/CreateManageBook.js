import {Field, Form, Formik} from "formik";
import React from "react";
import * as service from "../service/BookManagerService";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function CreateManageBook() {
    const navigate = useNavigate()
    return (


        <Formik initialValues={{
            title: '',
            quantity: '',
        }} onSubmit={(values) => {
            const createBook = async ()=>{
                await service.createBook(values)
                toast(`Create ${values.title} success!`)
                navigate('/')
            }
            createBook()
        }
        }>
            {
                <div className='container'>
                    <h1 style={{textAlign: 'center'}}>Create Book</h1>
                    <Link to={`/`}>Back</Link>
                        <Form>
                            <label htmlFor="todo" className='form-label'>Title</label>
                            <div className='mb-3'>
                                <Field type='text' className='form-control' id='todo' name='title'/>
                            </div>
                            <label htmlFor="todo" className='form-label'>Quantity</label>
                            <div className='mb-3'>
                                <Field type='number' className='form-control' id='todo' name='quantity'/>
                            </div>
                            <div>
                                <button type='submit'
                                        className='btn btn-primary'>Submit
                                </button>
                            </div>
                        </Form>
                </div>
            }
        </Formik>
    )
}