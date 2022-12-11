import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/FormContainer";
import {
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = [...searchParams].length > 0 ? [...searchParams][0][1] : "/";
  //   const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(searchParams.length);
  console.log(redirect);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!(userInfo === undefined || userInfo.length === 0)) {
  //     navigate(redirect);
  //   }
  // }, [navigate, userInfo, redirect]);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
      //If you log in successfully, you want to be redirected to the home page instead of staying on the login page, which is what the history.push does.
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = (e) => {
    //All right, so for the submitHandler, this is where we actually
    //  want to call the  dispatch the login action,

    e.preventDefault();
    //dISPATCH LOGIN

    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
