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
import customer1 from "../../Assets/customer1.jpg"
import customer2 from "../../Assets/customer2.jpg"
import customer3 from "../../Assets/customer3.jpg"
import CountUp from 'react-countup';
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollTop';
export default function Home() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
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
    < >
      <div className="loading">
        <span className="loader"></span>
      </div>
      <ScrollTop/>
      <div className="home">
        <div className="main">
          <div className="container h-100">
            <div className="row">
              <div className="col-lg-6">
                <span>OFFICE FASHION</span>
                <h1>New Fashion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link to={"/all"}>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
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
        <div className="customer py-5">
          <div className="container py-5">
            <div className="header d-flex align-items-center  justify-content-center flex-column mb-5">
              <span>OUR CUSTOMERS</span>
              <h2>Our Satisfied Customer Says</h2>
            </div>
            <OwlCarousel className='owl-theme' loop margin={20} dots {...responsive}>
              <div className="item">
                <div className="test-info p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer1} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>
              <div className="item">
                <div className="test-info p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer2} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>
              <div className="item">
                <div className="test-info p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer3} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Ali hamad  </h5>
                        <span>cairo</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>
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
        <div className="blog py-5">
          <div className="container py-5">
            <div className="header d-flex align-items-center  justify-content-center flex-column mb-5">
              <span>LATEST BLOG</span>
              <h2>From Our Blog</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-sm-12">
                <div className="shadow">
                  <div className='row align-items-center'>
                    <div className="col-lg-6 col-sm-12">
                      <div className="blog-bg">
                        
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className='information p-3 h-100'>
                        <i className="fa-regular fa-calendar me-2"></i>
                        <span>August 9, 2023</span>
                        <i className="fa-regular fa-comment-dots mx-2"></i>
                        <span>3</span>
                        <h4 className='my-3'>Every Single Way You Can Wear Pastel</h4>
                        <p>Never ever think of giving up. Winners never quit and</p>
                        <div className="d-flex align-items-center">
                          <img src={customer1} alt="customer" className=" rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
                          <div className='user my-2'>
                            <h5>Alex jacson</h5>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="shadow">
                  <div className='row align-items-center'>
                    <div className="col-lg-6 col-sm-12">
                      <div className="blog-bg2"> 
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className='information p-3 h-100'>
                        <i className="fa-regular fa-calendar me-2"></i>
                        <span>August 9, 2023</span>
                        <i className="fa-regular fa-comment-dots mx-2"></i>
                        <span>3</span>
                        <h4 className='my-3'>Every Single Way You Can Wear Pastel</h4>
                        <p>Never ever think of giving up. Winners never quit and</p>
                        <div className="d-flex align-items-center">
                          <img src={customer2} alt="customer" className=" rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
                          <div className='user my-2'>
                            <h5>Kerry D.Silva</h5>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}