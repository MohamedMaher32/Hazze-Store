import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Footer from '../Footer/Footer'
import { FunctionContext } from '../../Context/ShareFunction'
import ScrollTop from '../ScrollTop'
export default function Login() {
  let { saveUserData } = useContext(FunctionContext)
  // main Api link
  let baseUrl = "https://route-ecommerce.onrender.com"
  // display error
  let [errMsg, setErrMes] = useState("")
  // btn loading
  let [loading, setLoading] = useState(false)
  // programming routing
  let navigate = useNavigate()
  // validation form
  let validationSchema = Yup.object({
    email: Yup.string().required().email("Enter your valid email"),
    password: Yup.string().required().matches(/^[A-Za-z0-9!@#$%&*_-]{3,16}$/, "Enter valid password"),
  })
  // dateiles form
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      sendData(values)
      //  console.log(values);
    },
    validationSchema,
    // we can write up line as (validationSchema) becouse (validationSchema = validationSchema)
  })
  // api function
  async function sendData(info) {
    setLoading(true)
    let { data } = await axios.post(`${baseUrl}/api/v1/auth/signin`, info).catch((error) => {
      console.log(error);
      setErrMes(error.response.data.message)
      setLoading(false)
    })
    console.log(data);
    if (data.message == 'success') {
      localStorage.setItem("token", data.token)
      saveUserData(data.user)
      navigate("/home")
    }
  }
  // design form
  return (
    <>
    <ScrollTop/>
      <div className="header-page py-5 ">
        <div className='text-center pb-5'>
          <h2>Login Now </h2>
          <span>Home / Login </span>
        </div>
        <div className="container">
          <div className='w-75 mx-auto shadow p-5 bg-white'>
            <form onSubmit={formik.handleSubmit}>
              <div className='my-3'>
                <label htmlFor="email">Email:</label>
                <input onChange={formik.handleChange} type="email" className='form-control' id='email' name='email' />
                <p className='text-danger'>{formik.errors.email}</p>
              </div>
              <div className='my-3'>
                <label htmlFor="password">Password:</label>
                <input onChange={formik.handleChange} type="password" className='form-control' id='password' name='password' />
                <p className='text-danger'>{formik.errors.password}</p>
              </div>
              <Link to='/forgetpassowrd'>Forgrt Password?</Link>
              {errMsg != "" ? <div className='alert alert-danger'>{errMsg}</div> : ""}
              {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto mt-3'><i className='fa-solid fa-spinner fa-spin'></i></button>
                :
                <button disabled={!formik.isValid} type='submit' className='btn btn-bg2 d-flex mx-auto mt-3'>Login</button>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
