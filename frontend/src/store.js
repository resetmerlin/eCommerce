import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";
import { productDetailsReducer } from "./reducers/productReducers";
const reducer = combineReducers({
  productList: productListReducer,
  // Now, this is really important because this is this is what's going to show in as you as this piece

  // of state.

  // So it'll be the product list part of the state.
  productDetails: productDetailsReducer,
});

const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//
// // const initialState = { value: { username: "" } };

// storeSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       //reducer is just a function that takes in two argument it takes in an action and it takes in the previous state of the application.
//       // and then based on those two things, it will return a new state so it's basically a function that will describe how our states interact with
//       //each other
//       //action will be something we get to modify that state
//       //but after modifying it and we call this function again whatever we modified this to will be equal to the state
//       //and action is just a placeholder for where we can send information

//       state.value = action.payload;
//       //so all we're doing is we're just setting  the new value of the state to be equatl to whatever we pass over here
//       empty: (state) => {
//         state = initialState;
//         //we are clearing out whatever username we created before
//       };
//     },
//   },
// });
// export const { login, empty } = storeSlice.actions;