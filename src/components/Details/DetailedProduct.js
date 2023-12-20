import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails"
import "./DetailedProduct.css"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice'; // Import your cartSlice actions
import { removeFromCart } from '../../store/slices/cartSlice'; // Import the removeFromCart action



export default function DetailedProduct({ productItem }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(productItem)); // Dispatch the addToCart action with the product
    };

    // Access the cart state from Redux
const cartItems = useSelector(state => state.cart.items);
const handleRemoveItem = itemId => {
    dispatch(removeFromCart(itemId));
  };
  console.log(cartItems)

  
    return (
        <div class="container-fluid py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <img class="img-fluid animated pulse infinite" src={productItem.images[1]} />
                        <hr></hr>
                    <div class="container">
                        <div class="row row-cols-4">
                            <div class="col">
                                <div class="card" >
                                    <img class="card-img-top" src={productItem.images[0]} alt="Card image"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" >
                                    <img class="card-img-top" src={productItem.images[1]} alt="Card image"/>
                                </div>

                            </div>
                            <div class="col">
                                <div class="card" >
                                    <img class="card-img-top" src={productItem.images[2]} alt="Card image" style={{height:"100%"}}/>
                                </div>

                            </div>
                            <div class="col">
                                <div class="card" >
                                    <img class="card-img-top" src={productItem.images[3]} alt="Card image"/>
                                </div>

                            </div>
                        </div>
                    </div>

                        
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="text-primary mb-4">{productItem.title}</h1>
                        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non
                        </p>
                        <div className="" >
                        <h5 className="card-title  mt-2">Rating:</h5>
                        <ul className="text-info" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {Array.from({ length: Math.round(productItem.rating) }).map((_, index) => (
                            <li key={index} style={{ display: 'inline', marginRight: '' }}>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <hr/>
                        <div>
                            <h2> Original Price: {productItem.price}$</h2>
                                <div className="mt-3">


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
                            </div>      

                        </div>
                        <hr></hr>
                        <div>
                        {productItem.stock === 0 ? (
                            <button type="button" className="btn btn-danger">
                                out of stock
                            </button>
                            ) : (
                            <button type="button" className="btn btn-success">
                                In stock
                            </button>
                            )}

                        </div>
                        <hr></hr>
                        <div className=" d-flex flex-column ">
                        <div className="d-flex  mx-5">
                        {cartItems.map(item => (
                            <div className="d-flex m-3" key={item.id}>
                                {item.quantity > 0 && (
                                <>
                                    <button className='btn btn-warning' onClick={() => handleRemoveItem(item.id)}> - </button>
                                    <h4 className="align-middle mx-4">
                                    <strong>{item.quantity}</strong>
                                    </h4>
                                    <button className='btn btn-success' onClick={() => handleAddToCart(item.id)}> + </button>
                                </>
                                )}
                            </div>
                            ))}

                            </div>
                            <div>
                            </div>
                            <div>
                                
                            </div>
                            <div className="d-flex m-3">
                            <button type="button" class="btn btn-primary btn-sm  m-2">Buy Now</button>
                            <button class="btn btn-primary btn-sm  m-2" onClick={() => handleAddToCart(productItem.id)} type="button" class="btn btn-secondary btn-sm">Add to chart</button>


                            </div>
                            

                        </div>
                        <hr></hr>





                    </div>
                </div>
            </div>
        </div>
    

    );

}
