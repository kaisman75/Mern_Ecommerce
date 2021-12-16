import React, {useEffect} from 'react'
import Product from '../Product';
import MessageBox from '../MessageBox';
import LoadingBox from '../LoadingBox';
import { useDispatch,useSelector } from 'react-redux';
import { Products_List } from '../ReduxComponent/reduxActions';


const HomeScreen = () => {
   
   const productsList= useSelector(state => state.Products_List);
   const{error,loading,products}=productsList;
    
  const dispatch=useDispatch();
   
    useEffect(()=>{
     dispatch(Products_List) 
    },[]);


 
    return (
        
             <div>
                 {loading?<LoadingBox></LoadingBox>:error?(<MessageBox variant="danger">{error}</MessageBox>):(

                     <div className="row center">
                    {
                   products.map((product) => {
                       
                        return (
                            
                           <Product product={product}></Product>
                
           ) })}

                </div>
                 )}
                
            </div>
        
    )
}

export default HomeScreen
