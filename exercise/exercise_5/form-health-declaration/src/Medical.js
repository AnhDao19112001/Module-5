import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"

function Medical() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    identity: '',
                    dob: '',
                    gender: '1',
                    nationality: '',
                    company: '',
                    part: '',
                    yt: '',
                    conscious: '',
                    district: '',
                    commune: '',
                    village: '',
                    phone: '',
                    email: '',
                    informationFill: '',
                    informationTick: [],
                    informationTick2: []
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Name is not empty"),
                    identity: Yup.number()
                        .required("Identity is not empty"),
                    dob: Yup.number()
                        .required("Date of birth is not empty")
                        .min(1991, "> 1990"),
                    nationality: Yup.string()
                        .required("Nationality is not empty"),
                    conscious: Yup.string()
                        .required("Conscious is not empty"),
                    district: Yup.string()
                        .required("District is not empty"),
                    commune: Yup.string()
                        .required("Commune is not empty"),
                    village: Yup.string()
                        .required("Village is not empty"),
                    phone: Yup.number()
                        .required("Phone is not empty"),
                    email: Yup.string()
                        .required("Email is not empty")
                        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is not empty")
                })}

                onSubmit={(values) => {
                    values.Alert("Create success")
                }}>
                <div className="containerForm">
                    <h1 style={{textAlign: "center"}}>Tờ khai y tế</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Họ tên</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                            <ErrorMessage name='name' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="identity">Số hộ chiếu/CMND</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="identity"
                                name="identity"
                            />
                            <ErrorMessage name='identity' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Năm sinh</label>
                            <Field
                                type="date"
                                className="form-control"
                                id="dob"
                                name="dob"
                            />
                            <ErrorMessage name='dob' component='span' className='text-danger'/>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                type="radio"
                                value="Nam"
                                name='gender'
                            />
                            <span className="form-check-label">
                                Nam
                            </span>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                type="radio"
                                value="Nữ"
                                name='gender'
                            />
                            <span className="form-check-label">
                                Nữ
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nationality">Quốc tịch</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="nationality"
                                name="nationality"
                            />
                            <ErrorMessage name='nationality' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Công ty làm việc</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                            />
                            <ErrorMessage name='company' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="part">Bộ phận làm việc</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="part"
                                name="part"
                            />
                            <ErrorMessage name='part' component='span' className='text-danger'/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor='insuranceCard'>
                                <p>Có thẻ bảo hiểm y tế</p>
                            </label>
                            <Field
                                id='insuranceCard'
                                className="form-check-input"
                                type="radio"
                                value="Có"
                                name='yt'
                            />
                        </div>
                        <h2 style={{textAlign: "center"}}>Địa chỉ liên lạc tại Việt nam</h2>
                        <div className="form-group">
                            <label htmlFor="conscious">Tỉnh thành</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="conscious"
                                name="conscious"
                            />
                            <ErrorMessage name='conscious' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="district: ">Quận/Huyện</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                            />
                            <ErrorMessage name='district' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="commune">Phường/Xã</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="commune"
                                name="commune"
                            />
                            <ErrorMessage name='ward' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="village">Số nhà, phố, tổ dân phố/thôn/đội</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="village"
                                name="village"
                            />
                            <ErrorMessage name='village' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                            />
                            <ErrorMessage name='phone' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="form-control"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name='email' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="informationFill">Trong vòng 14 ngày qua, anh/chị có đến quốc gia/vùng lãnh
                                thổ nào (có thể đi qua nhiều quốc gia) </label>
                            <Field as='textarea'
                                   type="text"
                                   className="form-control"
                                   id="informationFill"
                                   name="informationFill"
                            />
                            <ErrorMessage name='identityCard' component='span' className='text-danger'/>
                        </div>
                        <div className='form-group'>
                            <label>Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu
                                nào sau đây không?</label>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Sốt"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Sốt</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Ho"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Ho</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Khó thở"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Khó thở</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Viêm phổi"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Viêm phổi</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Đau họng"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Đau họng</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Mệt mỏi"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Mệt mỏi</p>
                                </span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Trong vòng 14 ngày qua, anh/chị có tiếp xúc với?</label>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người bệnh hoặc nghi ngờ mắc bệnh covid 19"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người bệnh hoặc nghi ngờ mắc bệnh covid 19</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người từ nước có bệnh covid 19"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người từ nước có bệnh covid 19</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người có biểu hiện (sốt, ho, khó thở, viêm phổi)"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người có biểu hiện (sốt, ho, khó thở, viêm phổi</p>
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Khai báo</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
export default Medical;