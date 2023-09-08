import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'
export default function ResetCode() {
    // main Api link
    let baseUrl = "https://route-ecommerce.onrender.com"
    // error element to display erroe message)
    let [errorMsg, setErrMes] = useState("")
    // btn loading
    let [loading, setLoading] = useState(false)
    // programming routing
    let navigate = useNavigate()
    //******************************************************* form code ************************************************************************** */
    // validation form
    let validationSchema = Yup.object({
        resetCode: Yup.string().required().matches(/^[0-9]{4,6}$/, "Enter your valid code"),
    })
    // dateiles form
    let form2 = useFormik({
        initialValues: {
            resetCode: ""
        },
        onSubmit: (value) => {
            verifyResetCode(value)
            console.log(value);
        },
        validationSchema,
    })
    // api function
    async function verifyResetCode(info) {
        setLoading(true)
        let { data } = await Axios.post(`${baseUrl}/api/v1/auth/verifyResetCode`, info).catch((error) => {
            console.log(error.response.data.message);
            setErrMes(error.response.data.message)
            setLoading(false)
        })
        console.log(data);
        if (data.status == 'Success') {
            navigate("/newpassword")
        }
    }
    // ********************************************************************************* html code ********************************************
    return (
        <>
        <ScrollTop/>
            <div className="header-page py-5 ">
                <div className='text-center pb-5'>
                    <h2>Verify Code </h2>
                    <span>Home / Verify Code</span>
                </div>
                <div className='container'>
                    <div className='w-75 mx-auto shadow p-5 bg-white'>
                        <form onSubmit={form2.handleSubmit}>
                            <div className='my-3'>
                                <label htmlFor="resetCode">Reset Code:</label>
                                <input onChange={form2.handleChange} type="text" className='form-control' id='resetCode' name='resetCode' />
                                <p className='text-danger'>{form2.errors.resetCode}</p>
                            </div>
                            {errorMsg != "" ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
                            {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto'><i className='fa-solid fa-spinner fa-spin'></i></button>
                                :
                                <button disabled={!form2.isValid} type="submit" className='btn btn-bg2 d-flex mx-auto'>Verify Code</button>}
                            <p className='text-center mt-4'>"Reset code sent to your email , Please check it"</p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
