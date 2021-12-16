import React ,{useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useLocation } from 'react-router-dom'
import  { Add_to_CART } from '../ReduxComponent/reduxActions'
 function CartScreen() {
    const params=useParams();
    const {search}=useLocation();
    const dispatch = useDispatch()
    const {id:productId}=params;
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    useEffect(() => {
        dispatch(Add_to_CART(productId,qty))
      }, [dispatch,productId,qty])
    return (
        
        <div className='card card-body'>  
            <h1>Card Screen</h1>
            <p>product is :{productId}</p>
            <p> quantity is : {qty}</p> 

        </div>
    )
}
export default CartScreen