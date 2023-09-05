import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as productTypeService from "../service/ProductTypeService";
import * as Yup from "yup";
import * as productService from "../service/ProductService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";

function CreateProduct() {
    const [typeList, setTypeList] = useState([]);
    const navigate = useNavigate();
    const getAllType = async () => {
        const result = await productTypeService.getAllType();
        setTypeList(result)
    }
    useEffect(() => {
        getAllType();
    }, [])
if(!typeList) {
    return null;
}
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    dateOfBirth: "",
                    quantity: "",
                    productType: `${JSON.stringify({
                        id: 1,
                        name: "Ao Quan"
                        })}`
                }}

                validationSchema={Yup.object({
                    name: Yup.string().required("Tên sản phẩm không được để trống!")
                        .max(100, "Tên sản phẩm không dài quá 100 ký tự!"),
                    dateOfBirth: Yup.string().required("Ngày không được để trống!"),
                    quantity: Yup.number().required("Số lượng sản phẩm không được để trống!")
                        .min(1, "Số lượng sản phẩm phải lớn hơn 0")
                })}

                onSubmit={async (values) => {
                    const result = {...values, productType: JSON.parse(values.productType)}
                        await productService.add(result)
                        toast(`Them moi sản phẩm ${values.name} thành công!`)
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
                            {typeList.map((type) => (
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

export default CreateProduct;