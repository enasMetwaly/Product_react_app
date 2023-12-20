import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice'; // Import your cartSlice actions
import './ProductCard.css'


export default function ProductCard({ productItem }) {
  
  const navigate = useNavigate();

  const redirectToDetails = (id) => {
    console.log(id);
    navigate(`/product-details/${id}`);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productItem)); // Dispatch the addToCart action with the product
  };


  return (
    <div className="card h-100  position-relative  ">
      <img src={productItem.images[0]} style={{height :"170px"}} className="card-img-top " alt="..." />
      <div className="card-img " style={{height :"70px"}}>
        {productItem.stock === 0 ? (
          <button type="button" className="btn btn-danger position-absolute top-0 start-0">
            out of stock
          </button>
        ) : (
          <button type="button" className="btn btn-success position-absolute top-0 start-0">
            In stock
          </button>
        )}
        {/* <div className="d-flex justify-content-between mt-2">
      {productItem.stock > 0 ? (
        <button className="btn btn-info" onClick={handleAddToCart}>Add to Cart</button>
       ) : (
        <p>Out of stock</p>
      )} 

                <button
          className="btn btn-info"
          onClick={() => redirectToDetails(productItem.id)}
        >
          Details
        </button>
        </div> */}

      </div>

      <div className="card-body">

        <h5 className="card-title">{productItem.title}</h5>
        <p className="card-title">{productItem.description}</p>
        <p className="card-title">{productItem.price}</p>

        <h5 className="card-title mt-2">Rating: </h5>
            <ul className="card-title text-center text-info p-1 mt-0">
              {Array.from({ length: Math.round(productItem.rating) }).map((_, index) => (
                  <li key={index} >
                    <i class="fa fa-star" aria-hidden="true"></i>

                  </li>
                ))}
              </ul>
        {/* <div className="mt-3">
              <h5 className="card-title">Original Price: ${productItem.price}</h5>


              {productItem.discountPercentage ? (
                <>
                  <span className="badge rounded-pill text-bg-success">
                    Discount: {`${Math.round(productItem.discountPercentage)}%`}
                  </span>
                  <span className="badge rounded-pill text-bg-warning">
                    Price After Discount: ${`${Math.round(
                      productItem.price -
                        (productItem.price * productItem.discountPercentage) / 100
                    )}`}
                  </span>
                </>
              ) : (
                <span className="badge rounded-pill text-bg-danger">No Discount</span>
              )}
        </div>       */}
      </div>

      <div className="d-flex justify-content-between m-2">
        {productItem.stock > 0 ? (
          <button className="btn btn-info" onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <p>Out of stock</p>
        )}

                  <button
            className="btn btn-info"
            onClick={() => redirectToDetails(productItem.id)}
          >
            Details
          </button>
      </div>


    </div>
  );
}




// export default function ProductCard({ productItem }) {


// import React from "react";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../your/path/to/cartSlice'; // Import the addToCart action
// import { useNavigate } from 'react-router-dom';

// export default function ProductCard({ productItem }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const redirectToDetails = (id) => {
//     console.log(id);
//     navigate(`/product-details/${id}`);
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart(productItem)); // Dispatch the addToCart action with the product
//   };

//   return (
//           <div className="product-grid">
//             <div className="product-image">
//               <a href="#" className="image">
//                 <img className="pic-1" src={productItem.image1} alt="" />
//                 <img className="pic-2" src={productItem.image2} alt="" />
//               </a>
//               <span className="product-sale-label">hot</span>
//               <span className="product-discount-label">
//                 {productItem.stock === 0 ? (
//                   <button type="button" className="btn btn-danger">
//                     Out of stock
//                   </button>
//                 ) : (
//                   <button type="button" className="btn btn-success">
//                     In stock
//                   </button>
//                 )}
//               </span>
//             </div>
//             <div className="product-content">
//               <ul className="rating">
//                 {Array.from({ length: Math.round(productItem.rating) }).map((_, index) => (
//                   <li key={index} className="fas fa-star"></li>
//                 ))}
//               </ul>
//               <h3 className="title">
//                 <a href="#">{productItem.title}</a>
//               </h3>
//               <div className="price">
//                 {productItem.discountPercentage ? (
//                   <>
//                     <span className="badge rounded-pill text-bg-success">
//                       Discount: {`${Math.round(productItem.discountPercentage)}%`}
//                     </span>
//                     <span className="badge rounded-pill text-bg-info">
//                       Price After Discount: ${`${Math.round(
//                         productItem.price - (productItem.price * productItem.discountPercentage) / 100
//                       )}`}
//                     </span>
//                   </>
//                 ) : (
//                   <span className="badge rounded-pill text-bg-danger">No Discount</span>
//                 )}
//               </div>
//               <div className="product-button-group">
//                 <a className="product-like-icon" href="#">
//                   <i className="fas fa-heart"></i>
//                 </a>
//                 {productItem.stock > 0 ? (
//                   <>
//                     <button onClick={handleAddToCart} className="add-to-cart">
//                       <i className="fa fa-shopping-bag"></i> ADD TO CART
//                     </button>
//                   </>
//                 ) : (
//                   <p>Out of stock</p>
//                 )}
//                 <a className="product-compare-icon" href="#">
//                   <i className="fas fa-random"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//   );
// }
