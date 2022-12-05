import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { useParams } from "react-router-dom";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const { id } = useParams();

  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //What that'll do is it'll set an array with this as the first index at the zero index and this is the one index

  const dispatch = useDispatch();
  useEffect(
    () => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    },
    [dispatch, productId, qty]
    // I'm going to pass in dispatch the product I.D. So that's a change of the product I.D. changes and also qty
  );

  console.log(qty);
  return <div>Cart</div>;
};

export default CartScreen;
