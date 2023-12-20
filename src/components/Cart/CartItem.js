import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice'; // Import the removeFromCart action
import { removeItem } from "../../store/slices/cartSlice"; // Import the removeFromCart action





export default function CartItem({ carttItem }) {
    const dispatch = useDispatch(); // Get the dispatch function

      // Access the cart state from Redux
  const cartItems = useSelector(state => state.cart.items);
  const handleRemoveItem = itemId => {
    // Dispatch the removeFromCart action with the item ID to remove it
    dispatch(removeFromCart(itemId));
  };
  const entireRemove = (itemId) => {
    // Dispatch the removeItem action with the itemId
    dispatch(removeItem(itemId));
  };


// const getItemQuantity=()=>{
//   cartItems.map(item=>{
//     itemQuantity=item.quantity

//   })
//   return itemQuantity
// }


    return(
        <>
            <th scope="row">
            <div class="p-2">
            <img src={carttItem.images[0]} alt="" style={{width:"70"}}class="img-fluid rounded shadow-sm" />
            <div class="ml-3 d-inline-block align-middle">
                <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">{carttItem.title}</a></h5><span class="text-muted font-weight-normal font-italic">Category: {carttItem.category}</span>
            </div>
            </div>
            </th>
            <td class="align-middle"><strong>{carttItem.price}</strong></td>
            {cartItems
              .filter(item => item.id === carttItem.id)
              .map(filteredItem => (
                <td className="align-middle" key={filteredItem.id}>
                  <strong>
                    {filteredItem.quantity}
                  </strong>
                </td>
              ))}
           
                  <td class="align-middle">
                      
                      <button onClick={() => entireRemove(carttItem.id)}>
                        <i class="fa fa-trash"></i>
                      </button>
                      
              </td>
  


        </>
    )
}
