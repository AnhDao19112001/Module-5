import {ErrorMessage, Field, Form, Formik} from "formik";
import {FidgetSpinner} from "react-loader-spinner"
import { toast } from "react-toastify";
import * as Yup from "yup"

function FormCreateStudent() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
            }}

                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required("Name is not empty!"),
                        email: Yup.string()
                            .required("Email is not empty!")
                            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email not valid!"),
                        phone: Yup.number()
                            .required("Phone is not empty!"),
                        message: Yup.string()
                            .required("Message is not empty!")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            console.log(values);
                            toast('Create contact success!')
                        }, 2000)
                    }
                    }>
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h1>Contact Form</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor="nameContact" className='form-label'>Contact Name</label>
                                    <Field type='text' className='form-control' id='nameContact' name='name' />
                                    <ErrorMessage name='name' component='span' className='form-error' style={{color: 'red'}}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Contact Email</label>
                                    <Field type='text' className='form-control' id='email' name='email' />
                                    <ErrorMessage name='email' component='span' className='form-error' style={{color: 'red'}}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="phone" className='form-label'>Contact Phone</label>
                                    <Field type='number' className='form-control' id='phone' name='phone' />
                                    <ErrorMessage name='phone' component='span' className='form-error'style={{color: 'red'}} />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="message" className='form-label'>Contact Name</label>
                                    <Field type='textarea' className='form-control' id='message' name='message' />
                                    <ErrorMessage name='name' component='span' className='form-error' style={{color: 'red'}}/>
                                </div>
                                {
                                    isSubmitting ?
                                        <FidgetSpinner
                                            visible={true}
                                            height="50"
                                            width="50"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                            ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                            backgroundColor="#F4442E"
                                        />
                                        : <button type='submit' className='btn btn-primary'>Submit</button>
                                }
                            </Form>
                        </div>
                    )}
            </Formik>
        </>
    )
}

export default FormCreateStudent;