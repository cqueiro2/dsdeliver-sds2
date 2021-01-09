import React, {useEffect, useState} from "react"

import "./styles.css";
import StepsHeader from "./StepsHeader";
import ProductsList from './ProductsList';
import { Product, OrderLocationdata } from "./types";
import { fetchProducts } from '../api';
import OrderLocation from "./OrderLocation";


const Orders = () => {
  const [Products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

  useEffect(() => {
   fetchProducts()
   .then(response => setProducts(response.data))
   .catch(error => console.log(error))
  },[])


    return(
      <div className="orders-container">
          <StepsHeader/>
          <ProductsList products={Products}/>
          <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
      </div>
    )
}

export default Orders