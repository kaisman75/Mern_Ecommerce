import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

 function CartScreen() {
    const params=useParams();
    const {search}=useLocation();
    const {id:productId}=params;
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
   
    return (
        
        <div>{
             console.log(productId,qty)
        }
            <h1>Card Screen</h1>
            <p>product is :{productId}</p>
            <p> quantity is : {qty}</p>

        </div>
    )
}
export default CartScreen