import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">CATEGORIES</h5>
                            <div className="categories mt-4">
                                <Link to='/all'>Woman</Link>
                                <Link to='/all'>Man</Link>
                                <Link to='/all'>Jewelery</Link>
                                <Link to='/all'>Electronics</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">HELP</h5>
                            <div className="categories mt-4">
                                <Link to='/home'>Track Order</Link>
                                <Link to='/home'>Returns</Link>
                                <Link to='/home'>Shipping</Link>
                                <Link to='/home'>FAQs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold mb-4">GET IN TOUCH</h5>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="social d-flex my-3">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter "></i>
                                <i className="fa-brands fa-linkedin-in "></i>
                                <i className="fa-brands fa-github "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div >
                            <h5 className="text-white fw-bold">NEWSLETTER</h5>
                            <input type="email" className="form-control my-4" placeholder="Email"/>
                            <button className="btn btn-bg2 rounded-0">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 text-white text-center bg-dark">All Rights Reserved And Copy Right 2023 <i className="fa-solid fa-heart text-danger"></i> By Mohamed Maher </div>
        </div>
    )
}