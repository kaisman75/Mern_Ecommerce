import React,{ useState ,useEffect} from 'react'
import { useParams } from 'react-router'
import Rating from '../Rating'
import axios from "axios";
const ProductScreen = () => {
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            const { data }= await axios.get('/api/products');
              
             setProducts(data)
             
        }
        
        fetchData(); 
       

    }, [])
    let {id}=useParams()
    const product=products.find((x)=>
        x._id===id
       )
     if(!product){
    return(<div>Product Not Found</div>)
      }
    const {
        _id,
        name,
        category,
        image,
        price,
        countInStock,
        brand,
        rating,
        numReviews,
        description 
    
    } = product;
    return (
        <div className="row top">
           <div className="col-1">
               <img src={image} alt={name} />

           </div>
           <div className="col-2">
               <h1>{name}</h1>
               <li>{brand}</li>
              <li>{category}</li> 
              <br/>
               <Rating numReviews={numReviews} rating={rating}/>
               <li>Price : ${price}</li> 
               <li>{description}</li>
            
           </div>
           <div className="col-3">
            <div className="card card-body">
                <ul>
                    <li>
                        <div className="row top">
                            <div>Price :</div>
                            <div className="price">$ {price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>status :</div>
                            <div>{countInStock>0?<span className="success">InStock</span>:<span className="danger">Unvalable</span>}</div>
                        </div>
                    </li>
                    <li>
                        <button className="primary block">Add To Card</button>
                    </li>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default ProductScreen
