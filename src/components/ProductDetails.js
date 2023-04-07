import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from './Product'
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()

    setProduct(data)
  }

  useEffect(()=>{
    fetchProduct(id);
  },[id])
    return (
  
        <>
          <div> 
            <h3>Product Details</h3> 
         <h5>Click <Link to='/'>Go Back</Link> to get back to shopping</h5>
         <div  ><img src={product.image} alt={product.title} style={{flex:"left"}} /></div>
         <p class="description">{product.description}</p>
                <p class="price">Price: ${product.price}</p>
               
                </div> 
          
        </>       )
}
         

export default ProductDetails;