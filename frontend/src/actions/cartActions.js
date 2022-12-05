import axios from "axios";

//And the reason we're bringing in Axios is because when we add an item to the car, we want to make a
// request to API products and then the I.D. to get the the the fields to get the data for that particular
// product to add to our cart

import { CART_ADD_ITEM } from "../constants/cartConstants";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  // Now we're also going to be saving our entire cart to local storage here.

  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  //   Now we save it to local storage here, but where do we actually get it to fill the state?

  //   So we do that in our store.
};
