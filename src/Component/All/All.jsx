import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import $ from 'jquery'
import Footer from '../Footer/Footer'
import toast from 'react-hot-toast';
import ScrollTop from '../ScrollTop'
export default function All() {
    // get context
    let { getAllCartData } = useContext(CartContext)
  // main Api link
  let baseUrl = "https://ecommerce.routemisr.com"
  // array product
  let [productList, setProductList] = useState([])
  // mounting function
  useEffect(() => {
    getProducts()
  }, [])
  // api function
  async function getProducts() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products`)
    $(".loading").fadeOut(1500)
    //console.log(data.data);
    setProductList(data.data)
  }
  // api cart function
  async function addItemCart(productId) {
    let body = { productId: productId }
    let headers = { token: localStorage.getItem("token") }
    let { data } = await axios.post(`${baseUrl}/api/v1/cart`, body, { headers })
    console.log(data);
    if (data.status == "success") {
      toast.success(data.message, {position: "bottom-right" , style: {background: '#e32879',color: '#fff'}})
      getAllCartData()
    }
  }
  return (

    <>
      <div className="loading">
        <span className="loader"></span>
      </div>
      <ScrollTop/>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>Our Products </h2>
          <span>Home / Products </span>
        </div>
      </div>
      <div className='all py-5'>
        <div className="container">
          <div className='row m-0 g-3'>
            {productList.map((el) => {
              return <div className="col-lg-3 col-md-4 col-sm-6 item" key={el._id}>
                <div className="product shadow">
                  <img src={el.imageCover} alt="product" className='w-100 mb-2' />
                  <div className="px-3">
                    <span>{el.category.name}</span>
                    <h3 className='h6 fw-bold'>{el.title.split(" ").slice(0, 2).join(" ")}</h3>
                  </div>
                  <div className='d-flex justify-content-between px-3'>
                    <p>{el.price}$</p>
                    <div><i className='fa-solid fa-star text-warning'></i>{el.ratingsAverage}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 shoping fs-4 px-3 border-top product-footer ">
                    <Link to={"/datelies/" + el._id}><i className="fa-solid fa-eye text-primary"></i></Link>
                    <Link onClick={() => addItemCart(el._id)}><i className="fa-solid fa-cart-arrow-down text-success"></i></Link>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

