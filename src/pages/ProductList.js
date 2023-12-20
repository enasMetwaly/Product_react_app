import React, { useEffect , useState } from "react";
import ProductCard from "../components/Products/ProductsCard";
import { productsArray } from "../components/Products/ProductsData";


import { axiosInstance } from "../apis/config";
import { getProducts } from "../apis/product";

export default function ProductList() {

//   const deleteUser = (id) => {
//    console.log(id)
//    const updatedList = productsList.filter((product) => product.id !== id);
//    setProductsList(updatedList)
//   }
  const [productsList, setProductsList] = useState([]);



  
  useEffect(() => {
    // ANOTHER WAY
    // getUsers()
    //   .then((res) => setUsersList(res.data.users))
    //   .catch((error) => console.log(error));
    axiosInstance
      .get("https://dummyjson.com/products", {
        params: {
          name: "Ahmed",
        },
      })
      .then((res) => setProductsList(res.data.products))
      .catch((error) => console.log(error));

  }, []);

  const deleteProduct = (id) => {
    console.log(id);
    const updatedList = productsList.filter((product) => product.id !== id);
    setProductsList(updatedList);
  };
  return (
    <>
      <h2>products list</h2>
      <hr />
      <div class="container">
       <div class="row ">
        {productsList.map((product) => {
          return (
            
            <div className="col-md-3 col-sm-6 my-3"
            key={product.id}>
              <ProductCard
                productItem={product}
                deleteproductEvent={(id) => deleteProduct(id)}
              />
            </div>
          );
        })}
        </div>
      </div>
      </>
)
}
