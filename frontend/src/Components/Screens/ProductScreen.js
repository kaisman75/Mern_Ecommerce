import React from 'react'
import { useParams } from 'react-router'



const ProductScreen = () => {
    let {id}=useParams()
    return (
        <div>
            ProductScreen {id}
        </div>
    )
}

export default ProductScreen
