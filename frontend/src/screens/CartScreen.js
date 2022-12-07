import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useNavigate } from "react-router";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const { id: productId } = useParams();
  // const productId = id;

  const qty = new URLSearchParams(useLocation().search).get("qty");
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  //What that'll do is it'll set an array with this as the first index at the zero index and this is the one index

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //useSelector Allows you to extract data from the Redux store state, using a selector function.

  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(
    () => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    },
    [dispatch, productId, qty]
    // I'm going to pass in dispatch the product I.D. So that's a change of the product I.D. changes and also qty
  );
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  let navigate = useNavigate();

  const checkoutHandler = () => {
    navigate(`/login?redirect=${"/shipping"}`);
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {/* We want to check to see if there's anything in our cart. */}
        {cartItems.length === 0 ? (
          <Message>
            YOur cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                    {/* item.image came from database cartitems... */}
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    {/* item.priduct is the ID */}
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light "
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Sub total (
                {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                items
              </h2>
              $
              {cartItems
                .reduce(
                  (acc, item) => acc + Number(item.qty) * Number(item.price),
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                style={{ width: "100%" }}
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
