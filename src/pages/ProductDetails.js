import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../apis/config";
import DetailedProduct from "../components/Details/DetailedProduct";

export default function ProductDetails() {
  const [product, setProduct] = useState(null); // State to hold the product data

  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => {
        // Set the product data in the state
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]); // Use params.id as a dependency to re-fetch data when the ID changes
  return (

    <div className="col" >
        <h2>ProductDetails</h2>
        
        

        {product && <DetailedProduct productItem={product} />}
    </div>
  );

}

