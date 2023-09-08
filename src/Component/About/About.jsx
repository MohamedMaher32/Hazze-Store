import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import about from "../../Assets/about-us.jpg"
import serv1 from "../../Assets/service-1.png"
import serv2 from "../../Assets/service-2.png"
import serv3 from "../../Assets/service-3.png"
import CountUp from 'react-countup';
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop';
export default function About() {
  let responsive2 = { responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } } }
  // main Api link
  let baseUrl = "https://ecommerce.routemisr.com"
  // array product
  let [categoryList, setCategoryList] = useState([])
  // mounting function
  useEffect(() => {
    getCategory()
  }, [])
  // api function
  async function getCategory() {
    let { data } = await axios.get(`${baseUrl}/api/v1/categories`)
    $(".loading").fadeOut(1500)
    console.log(data.data);
    setCategoryList(data.data)
  }
  return (
    <>
      <div className="loading">
        <span className="loader"></span>
      </div>
      <ScrollTop/>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>About Us </h2>
          <span>Home / About </span>
        </div>
      </div>
      <div className="home">
        <div className="about py-5">
          <div className="container">
            <div className="row g-4 py-5 align-items-center">
              <div className="col-lg-6 col-sm-12">
                <img src={about} alt="about" className='w-100 rounded-3' />
              </div>
              <div className="col-lg-6">
                <div className='ps-lg-3'>
                  <span>ABOUT US</span>
                  <h2>About Story</h2>
                  <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link to={"/all"}>Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Service py-5">
          <div className="container">
            <div className="header d-flex align-items-center  justify-content-center flex-column">
              <span>OUR SERVICES</span>
              <h2>Best Services Save The World</h2>
            </div>
            <div className="row g-4 py-5">
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex align-items-center  justify-content-center flex-column shadow p-5 items h-100">
                  <img src={serv1} alt="serv" />
                  <h3 className='my-3'>MEN'S FASHION</h3>
                  <p className='text-center'>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex align-items-center  justify-content-center flex-column shadow p-5 items h-100">
                  <img src={serv2} alt="serv" />
                  <h3 className='my-3'>ELECTRONICS</h3>
                  <p className='text-center'>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="d-flex align-items-center  justify-content-center flex-column shadow p-5 items h-100">
                  <img src={serv3} alt="serv" />
                  <h3 className='my-3'>WOMEN'S FASHION</h3>
                  <p className='text-center'>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="catagory py-5">
          <div className="container py-5">
            <div className="header d-flex align-items-center  justify-content-center flex-column mb-5">
              <span>OUR Category</span>
              <h2>Better Way To Many Category</h2>
            </div>
            <OwlCarousel className=' owl-theme' loop margin={10} autoplay={true} autoplayTimeout={2000} {...responsive2}>
              {categoryList.map((el) => {
                return <div key={el._id} >
                  <img src={el.image} height={200} alt="el" />
                  <h6 className='mt-2 text-center'>{el.name}</h6>
                </div>
              })}
            </OwlCarousel>
          </div>
        </div>
        <div className="count">
          <div className="container ">
            <div className='row g-4  count-parent m-0'>
              <div className="col-md-3 col-sm-12">
                <div className='counter d-flex justify-content-center align-items-center text-center flex-column'>
                  <span><CountUp end={15000} enableScrollSpy /></span>
                  <p>CUSTOMERS</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className='counter d-flex justify-content-center align-items-center flex-column text-center'>
                  <span><CountUp end={120} enableScrollSpy /></span>
                  <p>BRANCHES</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className='counter d-flex justify-content-center align-items-center text-center flex-column'>
                  <span><CountUp end={1000} enableScrollSpy /></span>
                  <p>PARTNER</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className='counter d-flex justify-content-center align-items-center text-center flex-column'>
                  <span><CountUp end={9} enableScrollSpy />/10</span>
                  <p>AVRAGE REATE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}