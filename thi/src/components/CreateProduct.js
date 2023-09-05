import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import productTypeService from "../service/ProductTypeService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import productService from "../service/ProductService";
import * as Yup from "yup";

function CreateProduct() {

    const navigate = useNavigate();
    const [productType, setProductType] = useState([])

    const getProductTypeList = async () => {
        const productTypeData = await productTypeService.findAll()
        setProductType(productTypeData)
    }

    useEffect(() => {
        getProductTypeList();
    }, [])

    return (
        <Formik initialValues={{
            name: '',
            price: '',
            detail: '',
            idType: {}
        }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("name not is empty!")
                        .min(2, "ten toi thieu 2 ky tu")
                        .max(50, "ten toi da 50 ky tu"),
                    price: Yup.number()
                        .required("price is not empty!")
                        .min(10000, 'price it nhat 10000')
                        .max(50000, 'price cao nhat 50000'),
                    detail: Yup.string()
                        .required("detail is not empty!")
                        .min(1)
                        .max(10000, "toi da 10000 ky tu")
                })}

                onSubmit={async (values) => {
                    await productService.createProduct(values);
                    navigate('/')
                }}>
            <Form>
                <div className="container">
                    <h1>Create Product</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component='span' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <Field type="number" id="price" name="price" />
                        <ErrorMessage name="price" component='span' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label htmlFor="type">Product Type</label>
                        <Field as="select" name="idType">
                            {
                                productType.map((value) => (
                                    <option key={value + 1} value={value.id} name="idType" >
                                        {value.name}
                                    </option>
                                ))
                            }
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="detail">Detail</label>
                        <Field type="text" id="detail" name="detail" />
                        <ErrorMessage name="detail" component='span' style={{color: 'red'}}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Create</button>
                </div>
            </Form>
        </Formik>
    )
}

export default CreateProduct;