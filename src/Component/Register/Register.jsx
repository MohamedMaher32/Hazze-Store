import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'
export default function Resigster() {
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
    name: Yup.string().required().min(2, "Name must be minmum 2 letters").max(16, "Name must be maxmum 16 letters"),
    email: Yup.string().required().email("Enter your valid email"),
    phone: Yup.string().required().matches(/^(010|012|011|015)[0-9]{8}$/, "Enter your Egyption phone number"),
    password: Yup.string().required().matches(/^[A-Za-z0-9!@#$%&*_-]{3,16}$/, "Enter valid password"),
    rePassword: Yup.string().required().oneOf([Yup.ref("password")], "Re-passwoed not matched")
  })
  // dateiles form
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
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
    let { data } = await axios.post(`${baseUrl}/api/v1/auth/signup`, info).catch((error) => {
      console.log(error)
      setErrMes(error.response.data.message)
      setLoading(false)
    })
    console.log(data);
    if (data.message == 'success') {
      navigate("/login")
    }
  }
  // design form
  return (
    <>
    <ScrollTop/>
      <div className="header-page py-5 ">
        <div className='text-center pb-5'>
          <h2>Register Now </h2>
          <span>Home / Register </span>
        </div>
        <div className='container'>
          <div className='w-75 mx-auto shadow p-5 bg-white'>
            <form onSubmit={formik.handleSubmit}>
              <div className='my-3'>
                <label htmlFor="name">Name</label>
                <input onChange={formik.handleChange} type="text" className='form-control' id='name' name='name' />
                <p className='text-danger'>{formik.errors.name}</p>
              </div>
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
              <div className='my-3'>
                <label htmlFor="rePassword">Repassword:</label>
                <input onChange={formik.handleChange} type="password" className='form-control' id='rePassword' name='rePassword' />
                <p className='text-danger'>{formik.errors.rePassword}</p>
              </div>
              <div className='my-3'>
                <label htmlFor="phone">Phone:</label>
                <input onChange={formik.handleChange} type="text" className='form-control' id='phone' name='phone' />
                <p className='text-danger'>{formik.errors.phone}</p>
              </div>

              {errMsg != "" ? <div className='alert alert-danger'>{errMsg}</div> : ""}
              {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto'><i className='fa-solid fa-spinner fa-spin'></i></button>
                :
                <button disabled={!formik.isValid} type='submit' className='btn btn-bg2 d-flex mx-auto'>Register</button>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
