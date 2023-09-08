import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Notfound from './Component/Notfound/Notfound'
import All from './Component/All/All'
import Datelies from './Component/Datelies/Datelies'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import { FunctionContextProvider } from './Context/ShareFunction'
import Blog from './Component/Blog/Blog'
import CheakOut from './Component/CheakOut/CheakOut'
import Forgetpassword from './Component/Forgetpassword/Forgetpassword'
import ResetCode from './Component/Forgetpassword/ResetCode'
import NewPassword from './Component/Forgetpassword/NewPassword'
import { CartContextProvider } from './Context/CartContext'
import CartDateiles from './Component/CartDateiles/CartDateiles'
import { Toaster } from 'react-hot-toast';
export default function App() {
  // ProtectRouting function
  function ProtectRouting(props) {
    if (localStorage.getItem("token")) {
      return props.children
    }
    else {
      return <Navigate to='/' />
    }
  }
  // if user have data in localstorage navgite to home else navgite register
  function ProtectRouting2(props) {
    console.log(props);
    if (localStorage.getItem("token")) {
      return <Navigate to='/Home' /> 
    }
    else {
      return props.children
    }
  }
  let routes = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <ProtectRouting2><Register /> </ProtectRouting2> },
        { path: 'login', element: <Login /> },
        { path: "forgetpassowrd", element: <Forgetpassword /> },
        { path: "resetcode", element: <ResetCode /> },
        { path: "newpassword", element: <NewPassword /> },
        { path: "home", element: <ProtectRouting><Home /></ProtectRouting> },
        { path: "blog", element: <ProtectRouting><Blog /></ProtectRouting> },
        { path: "datelies/:id", element: <ProtectRouting><Datelies /></ProtectRouting> },
        { path: "checkout/:cartId", element: <ProtectRouting><CheakOut /></ProtectRouting> },
        { path: "navbar", element: <Navbar /> },
        {path:"cartdatiles" , element:<ProtectRouting><CartDateiles /></ProtectRouting>},
        { path: "all", element: <ProtectRouting><All /></ProtectRouting> },
        { path: "about", element: <ProtectRouting><About /></ProtectRouting> },
        { path: "contact", element: <ProtectRouting><Contact /></ProtectRouting> },
        { path: "footer", element: <Footer /> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ])
  return (
    <div>
      <CartContextProvider>
        <FunctionContextProvider>
          <Toaster></Toaster>
          <RouterProvider router={routes}/>
        </FunctionContextProvider>
      </CartContextProvider>
    </div>
  )
}
