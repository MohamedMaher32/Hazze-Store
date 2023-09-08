import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import empetyCart from '../../Assets/emptycart.png'
import { FunctionContext } from '../../Context/ShareFunction'
import { CartContext } from '../../Context/CartContext'
export default function Navbar() {
  let { userData, deleteData } = useContext(FunctionContext)
  let { cartList, deleteItemCard, updateQuantity } = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 position-sticky top-0">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" className='w-100' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa-solid fa-bars text-white fs-2 "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ?
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link active ' : ' nav-link ')} to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="/all">Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link active ' : ' nav-link ')} to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="/contact">Contact</NavLink>
                </li>
              </ul> : ""}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ?
                <>
                  <li className="nav-item  mt-1 me-3 ">
                    <Link to={'/cartdatiles'}>
                      <div className=" position-relative p-2 rounded-2">
                        <i className="fa-solid fa-cart-shopping  fs-4 cusror text-white"></i>
                        <span className="position-absolute start-25 translate-middle badge cart">{cartList?.numOfCartItems}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/' className="nav-link btn btn-bg2 rounded-0" style={{ cursor: "pointer" }} onClick={deleteData}>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-bg2 mb-2 rounded-0" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-bg2 rounded-0" to="/">Register</Link>
                  </li>
                </>}
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}