import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
  //Redux Thunk allows us to do is basically add a function within a function.

  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,

      payload: data,
      // We want to send the data, because if you remember in our reducer, when it's successfulProducts

      // is going to get filled with that payload and then that actually get passed down into the state.
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  //Redux Thunk allows us to do is basically add a function within a function.

  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    //   OK, now we're going to dispatch the request, so that just sets loading to true and then for the request
    // here, we want to hit a get request to API slash products.
    const { data } = await axios.get(`/api/products/${id}`);
    //So that will take an I.D. and then we want to pass that in here to the endpoint.
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,

      payload: data,
      // We want to send the data, because if you remember in our reducer, when it's successfulProducts

      // is going to get filled with that payload and then that actually get passed down into the state.
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      //We're just going to send the message if it fails.
    });
  }
};
