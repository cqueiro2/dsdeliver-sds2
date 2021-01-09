import {useEffect, useState} from "react"

import "./styles.css";
import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';
import { Product } from "./types";
import { fetchProducts } from '../api';


const Orders = () => {
  const [Products, setProducts] = useState<Product[]>([])

  useEffect(() => {
   fetchProducts()
   .then(response => setProducts(response.data))
   .catch(error => console.log(error))
  },[])


    return(
      <div className="orders-container">
          <StepsHeader/>
          <ProductsList products={Products}/>
      </div>
    )
}

export default Orders