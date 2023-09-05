import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import productService from "../service/ProductService";
import productTypeService from "../service/ProductTypeService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";

function UpdateProduct() {
    const navigate = useNavigate();
    const param = useParams();
    const [products, setProducts] = useState(null);
    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const getDetail = async () => {
            const productDetail = await productService.findById(param.id);
            console.log(productDetail);
            setProducts(productDetail);
        }
        getDetail()
    }, [param.id]);

    const getCustomerDetail = async () => {
        const customerType = await productTypeService.findAll()
        setProductType(customerType)
    }

    useEffect(() => {
        getCustomerDetail();
    }, [])

    if (!products) {
        return null;
    }

    return (
        <>
            <Formik initialValues={{
                id: products?.id,
                name: products?.name,
                price: products?.price,
                detail: products?.detail,
                idType: products?.idType
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name not is empty!"),
                        price: Yup.number().required("Price not is empty!").min(10000, "Min = 10000").max(100000, "Max = 100000"),
                        detail: Yup.string().required("Detail not is empty!").min(2, "Min = 2").max(10000, "Max = 1000")
                    })}
                    onSubmit={async (values) => {
                        await productService.UpdateProduct(param.id ,values);
                        navigate('/')
                    }}>
                <Form>
                    <div className="container">
                        <h1>Update Product</h1>
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
                        <button type="submit" className="btn btn-outline-primary">Update</button>
                        <NavLink to={'/'} className='btn btn-outline-primary'>Cancel</NavLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}


export default UpdateProduct;