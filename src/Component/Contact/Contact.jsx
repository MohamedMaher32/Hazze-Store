import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'
export default function Contact() {
  return (
    < >
    <ScrollTop/>
      <div className="header-page d-flex justify-content-center align-items-center py-5 text-center">
        <div className='py-5 '>
          <h2>Contact Us </h2>
          <span>Home / Contact </span>
        </div>
      </div>
      <div className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925149.3130079734!2d56.41033888957776!3d25.072581192552402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6829bbccf13f%3A0x3e7d654868612ec8!2z2YbZjtin2YHZj9mI2LHZjtipINio2Y_YsdmS2KzZkCDYrtmO2YTZkNmK2YHZjtip2ZAg2K_Zj9io2Y7Zig!5e0!3m2!1sar!2sae!4v1689280802618!5m2!1sar!2sae" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-md-4 col-sm-12">
              <div className="pb-4 px-4 serv">
                <div className="icon d-flex justify-content-center"><i className="fa-solid fa-location-arrow fs-3"></i></div>
                <p className=" text-muted my-2">Dubai , UAE</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="pb-4 px-4 serv">
                <div className="icon d-flex justify-content-center"><i className="fa fa-envelope fs-3"></i></div>
                <p className=" text-muted my-2">mhalosh43@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="pb-4 px-4 serv">
                <div className="icon d-flex justify-content-center"><i className="fa fa-phone fs-3"></i></div>
                <p className=" text-muted my-2">+971564620155</p>
              </div>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div className="col-md-6 col-sm-12">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="7"></textarea>
              </div>
            </div>
            <button className="btn btn-bg2 d-flex mx-auto">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}