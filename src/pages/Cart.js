import React from "react";
import  { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import CartItem from "../components/Cart/CartItem";

export default function CartPage() {

  var cartItems = useSelector(state => state.cart.items);


// Calculate the total by summing up the prices of all items in the cart
var cartItems = useSelector(state => state.cart.items);

// Calculate the total by summing up the price * quantity for all items in the cart
const total = cartItems.reduce((accumulator, currentItem) => {
  // Assuming each item has "price" and "quantity" properties
  const itemPrice = currentItem.price;
  const itemQuantity = currentItem.quantity;

  // Calculate the total price for the current item
  const itemTotalPrice = itemPrice * itemQuantity;

  // Add the total price of the current item to the accumulator
  return accumulator + itemTotalPrice;
}, 0); // Initialize accumulator to 0

const [cartList, setCartList] = useState([]);

const deleteItem = (id) => {
  console.log(id);
  const updatedList = cartList.filter((item) => item.id !== id);
  setCartList(updatedList);
};




  return (
<div>
<div class="px-4 px-lg-0">

  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

          {/* <!-- Shopping cart table --> */}
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                <tr key={item.id}>
                <CartItem 
                    carttItem={item}
                    deleteCartItem={(id) => deleteItem(id)}
                
                />
                </tr>
               ))}

              </tbody>
            </table>
          </div>
          {/* <!-- End --> */}
        </div>
      </div>

      <div class="row py-5 p-4 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0"/>
              <div class="input-group-append border-0">
                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">{total}</h5>
              </li>
            </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
}


/* <th scope="row">
<div class="p-2">
  <img src="https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg" alt="" style={{width:"70"}}class="img-fluid rounded shadow-sm" />
  <div class="ml-3 d-inline-block align-middle">
    <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Lumix camera lense</a></h5><span class="text-muted font-weight-normal font-italic">Category: Electronics</span>
  </div>
</div>
</th>
<td class="align-middle"><strong>$79.00</strong></td>
<td class="align-middle"><strong>3</strong></td>
<td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
</td> */
