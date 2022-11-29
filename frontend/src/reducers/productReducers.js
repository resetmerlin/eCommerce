import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// first one I want is a product list reducer.

// And this is going to handle the state for the product lists, which we see on the home page.

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //One is the product lists request where it where it's when we actually make the request.
    //One is going to be the product list success, which is if we get a successful response and we get the

    // data, one is going to be if it fails and then we send an error through the state.
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    //, we want the component to know that it's currently fetching. so it;s currently loading

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//We're going to dispatch an action to this productListReducer.
//action will be an object that has a type
//So it'll have a payload with those products in it that we fetch from the server.

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    //One is the product lists request where it where it's when we actually make the request.
    //One is going to be the product list success, which is if we get a successful response and we get the

    // data, one is going to be if it fails and then we send an error through the state.
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    //, we want the component to know that it's currently fetching. so it;s currently loading

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
