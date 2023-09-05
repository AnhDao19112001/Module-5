import {useEffect, useState} from "react";
import customerTypeService from "../service/CustomerTypeService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import customerService from "../service/CustomerService";
import {useNavigate} from "react-router";
import * as Yup from "yup";

function CreateCustomer() {
    const navigate = useNavigate()
    const [customerType, setCustomerType] = useState([])

    const getAllType = async () => {
        const result = await customerTypeService.getAll()
        setCustomerType(result)
    }

    useEffect(() => {
        getAllType();
    }, [])

    return (
        <>
            <Formik initialValues={{
                title: "",
                price: "",
                describe: "",
                idType: 1
            }}

                    validationSchema={Yup.object({
                        title: Yup.string().required("title is not empty!"),
                        price: Yup.number().required("price is not empty!"),
                        describe: Yup.string().required("describe is not empty!")
                    })}

                    onSubmit={async (values) => {
                        await customerService.create(values)
                        navigate(`/`)
                    }}>

                <Form>
                    <h1>Create Customer</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" type="text"/>
                        <ErrorMessage name="title" component='span' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <Field id="price" name="price" type="number"/>
                        <ErrorMessage name="price" component='span' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label htmlFor="idType">Type</label>
                        <Field id="idType" name="idType" as="select">
                        {customerType.map((type) => (
                                <option key={type.idType} value={type.idType}>{type.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="describe">Describe</label>
                            <Field id="describe" name="describe" type="text"/>
                            <ErrorMessage name="describe" component='span' style={{color: 'red'}}/>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default CreateCustomer;