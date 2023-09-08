import axios from "axios";
import { createContext, useEffect, useState } from "react";
import $ from 'jquery'
import toast from 'react-hot-toast';
// create contxet
export let CartContext = createContext(null)
// context function
export function CartContextProvider(props) {
    // main Api link
    let baseUrl = "https://ecommerce.routemisr.com"
    // cart object
    let [cartList, setCartList] = useState()
    // call allCartData
    useEffect(() => {
        getAllCartData()
    }, [])
    // api get all cart 
    async function getAllCartData() {
        let headers = { token: localStorage.getItem("token") }
        let response = await axios.get(`${baseUrl}/api/v1/cart`, { headers }).catch((err) => {
            console.log(err.response.data.statusMsg);
        })
        $(".loading").fadeOut(1500)
        console.log(response?.data);
        setCartList(response?.data)
    }
    async function deleteItemCard(id) {
        let headers = { token: localStorage.getItem("token") }
        let { data } = await axios.delete(`${baseUrl}/api/v1/cart/${id}`, { headers })
        setCartList(data)
        toast.error("Product Deleted Successfully From Your Cart", { style: { background: '#e32879', color: '#fff' } })
    }
    async function updateQuantity(id, count) {
        let body = { count: count }
        let headers = { token: localStorage.getItem("token") }
        let { data } = await axios.put(`${baseUrl}/api/v1/cart/${id}`, body, { headers })
        setCartList(data)
        toast.success("Product Quantity Updated successfully", { style: { background: '#e32879', color: '#fff' } })
    }
    return <CartContext.Provider value={{ cartList, getAllCartData, deleteItemCard, updateQuantity }}>
        {props.children}
    </CartContext.Provider>
}