import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import customer1 from "../../Assets/customer1.jpg"
import customer2 from "../../Assets/customer2.jpg"
import customer3 from "../../Assets/customer3.jpg"
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollTop';
export default function Blog() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
  return (
    <>
    <ScrollTop/>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>Our Blog </h2>
          <span>Home / Blog </span>
        </div>
      </div>
      <div className="home">
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
              <div className="col-lg-6 col-sm-12">
                <div className="shadow">
                  <div className='row align-items-center'>
                    <div className="col-lg-6 col-sm-12">
                      <div className="blog-bg3">
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
                          <img src={customer3} alt="customer" className=" rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
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
                      <div className="blog-bg4">
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
      </div>
      <Footer/>
    </>
  )
}
