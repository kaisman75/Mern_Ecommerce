import React, { useState ,useEffect} from 'react'
import Product from '../Product';
import axios from "axios";
import MessageBox from '../MessageBox';
import LoadingBox from '../LoadingBox';



const HomeScreen = () => {
    const[products,setProducts] = useState([]);
    const [loading ,setLoading]=useState(false);
    const[error,setError]=useState(false)
    useEffect(()=>{
        
        const fetchData= async ()=>{
            
            try{
             setLoading(true)
             const { data }= await axios.get('/api/products');
             setLoading(false)
             setProducts(data)
             }
             catch(err){
                    setError(err.message)
                    console.log(err.message)
                    setLoading(false)
             }
        }
        
        fetchData(); 
        

    }, [])
 
    return (
        
             <div>
                 {loading?<LoadingBox></LoadingBox>:error?(<MessageBox>{error}</MessageBox>):(

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
