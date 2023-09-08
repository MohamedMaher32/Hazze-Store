import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'
export default function NewPassword() {
    // main Api link
    let baseUrl = "https://route-ecommerce.onrender.com"
    // error element to display erroe message)
    let [errorMsg, setErrMes] = useState("")
    // btn loading
    let [loading, setLoading] = useState(false)
    // programming routing
    let navigate = useNavigate()
    //******************************************************* form new password ************************************************************************** */
    // validation form
    let validationSchema = Yup.object({
        email: Yup.string().required().email("Enter your valid email"),
        newPassword: Yup.string().required().matches(/^[A-Za-z0-9!@#$%&*_-]{3,16}$/, "Enter valid password"),
    })
    // dateiles form
    let form3 = useFormik({
        initialValues: {
            email: "",
            newPassword: ""
        },
        onSubmit: (value) => {
            ResetPassword(value)
        },
        validationSchema,
    })
    // api function
    async function ResetPassword(info) {
        setLoading(true)
        let { data } = await Axios.put(`${baseUrl}/api/v1/auth/resetPassword`, info).catch((error) => {
            setErrMes(error.response.data.message);
            setLoading(false)
        })
        console.log(data);
        if (data.token) {
            navigate("/login")
        }
    }
    // ********************************************************************************* html code ********************************************
    return (
        <>
        <ScrollTop/>
            <div className="header-page py-5 ">
                <div className='text-center pb-5'>
                    <h2>New Password </h2>
                    <span>Home / New Password</span>
                </div>
                <div className='container'>
                    <div className='w-75 mx-auto shadow p-5 bg-white'>
                        <form onSubmit={form3.handleSubmit}>
                            <div className='my-3'>
                                <label htmlFor="Email">Email:</label>
                                <input onChange={form3.handleChange} type="email" className='form-control' id='Email' name='email' />
                                <p className='text-danger'>{form3.errors.email}</p>
                            </div>
                            <div className='my-3'>
                                <label htmlFor="newPassword">New Password:</label>
                                <input onChange={form3.handleChange} type="password" className='form-control' id='newPassword' name='newPassword' />
                                <p className='text-danger'>{form3.errors.password}</p>
                            </div>
                            {errorMsg != "" ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
                            {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto'><i className='fa-solid fa-spinner fa-spin'></i></button>
                                :
                                <button disabled={!form3.isValid} type='submit' className='btn btn-bg2 d-flex mx-auto'>Update Password</button>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
