import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import * as productService from "../service/ProductService";
import * as productTypeService from "../service/ProductTypeService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";

function UpdateProduct() {
    const navigate = useNavigate();
    const [products, setProducts] = useState()
    const [typeProduct, setTypeProduct] = useState([])
    const param = useParams()

    const getAllType = async () => {
        const result = await productTypeService.getAllType();
        setTypeProduct(result)
    }

    useEffect(() => {
        getAllType();
    }, [])

    useEffect(() => {
        const getDetail = async () => {
            const result = await productService.findById(param.id)
            setProducts(result)
            console.log(result)
        }
        getDetail();
    }, [param.id])

    if (!products) {
        return null;
    }

    return (
        <>
            <Formik initialValues={{
                id: products?.id,
                name: products?.name,
                dateOfBirth: products?.dateOfBirth,
                quantity: products?.quantity,
                productType: products?.productType
            }}

                    validationSchema={Yup.object({
                        name: Yup.string().required("Tên sản phẩm không được để trống!")
                            .max(100, "Tên sản phẩm không dài quá 100 ký tự!"),
                        date: Yup.string().required("Ngày không được để trống!"),
                        quantity: Yup.number().required("Số lượng sản phẩm không được để trống!")
                            .min(1, "Số lượng sản phẩm phải lớn hơn 0")
                    })}

                    onSubmit={async (values) => {
                        const result = {...values, productType: JSON.parse(values.productType)}
                        await productService.edit(result)
                        toast(`Update sản phẩm ${values.name} thành công!`)
                        navigate(`/`)
                    }
                    }>

                <Form className={"container"}>
                    <h1>Chỉnh sửa sản phẩm</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                        <Field type="text" name="name" className="form-control" id="name"></Field>
                        <ErrorMessage name={'name'} component={'span'} style={{color: 'red'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">Ngày nhập sản phẩm</label>
                        <Field type="text" name="dateOfBirth" className="form-control" id="dateOfBirth"></Field>
                        <ErrorMessage name={'dateOfBirth'} component={'span'} style={{color: 'red'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Số lượng sản phẩm</label>
                        <Field type="number" name="quantity" className="form-control" id="quantity"></Field>
                        <ErrorMessage name={'quantity'} component={'span'} style={{color: 'red'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productType" className="form-label">Type</label>
                        <Field id="productType" name="productType" as="select" className="form-control">
                            {typeProduct.map((type) => (
                                <option value={`${JSON.stringify(type)}`}>{type.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-outline-primary mx-3">Lưu</button>
                        <NavLink to={`/`} className={'btn btn-outline-info'}>Thoát</NavLink>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default UpdateProduct;