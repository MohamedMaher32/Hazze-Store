import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'
export default function Forgetpassword() {
    // main Api link
    let baseUrl = "https://route-ecommerce.onrender.com"
    // error element to display erroe message)
    let [errorMsg, setErrMes] = useState("")
    // btn loading
    let [loading, setLoading] = useState(false)
    // programming routing
    let navigate = useNavigate()
    //******************************************************* form email ************************************************************************** */
    // validation form
    let validationSchema = Yup.object({
        email: Yup.string().required().email("Enter your valid email")
    })
    // dateiles form
    let form1 = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: (value) => {
            forgetPassword(value)
        },
        validationSchema,
    })
    // api function
    async function forgetPassword(info) {
        setLoading(true)
        let { data } = await Axios.post(`${baseUrl}/api/v1/auth/forgotPasswords`, info).catch((error) => {
            console.log(error);
            setErrMes(error.response.data.message)
            console.log(error.response.data.message);
            setLoading(false)
        })
        console.log(data);
        if (data.statusMsg == 'success') {
            navigate('/resetcode')
        }
    }
    // ********************************************************************************* html code ********************************************
    return (
        <>
        <ScrollTop/>
            <div className="header-page py-5 ">
                <div className='text-center pb-5'>
                    <h2>Forget Password </h2>
                    <span>Home / Forget Password </span>
                </div>
                <div className='container'>
                    <div className='w-75 mx-auto shadow p-5 bg-white'>
                        <form onSubmit={form1.handleSubmit}>
                            <div className='my-3'>
                                <label htmlFor="email">Email:</label>
                                <input onChange={form1.handleChange} type="email" className='form-control' id='email' name='email' />
                                <p className='text-danger'>{form1.errors.email}</p>
                            </div>
                            {errorMsg != "" ? <div className='alert alert-danger'>{errorMsg}</div> : ""}
                            {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto'><i className='fa-solid fa-spinner fa-spin'></i></button>
                                :
                                <button disabled={!form1.isValid} type="submit" className='btn btn-bg2 d-flex mx-auto'>Send Message</button>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
