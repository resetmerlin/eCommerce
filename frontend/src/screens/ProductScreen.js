import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [id]);
  // const product = products.find((p) => p._id === `${id}`);
  console.log(product);
  //which is another high order array method.
  // let's say for each product, let's say, where the product underscore
  //I.D. is equal to the ID that's in the URL => localjost3000/product/1
  //   리액트 라우터 라이브러리에서 제공하는 함수이고, Route path 와 일치하는 현재 URL에서 동적 매개변수의 키/값 쌍의 개체를 반환한다.

  // 쇼핑몰 웹사이트를 예를들면 메인 페이지에서 여러개의 값을 렌더링하고, 클릭한것만 렌더링 시키고자 할때 하나하나 다 onclick 이벤트를 사용하기가 번거로운데, useParams 로 해결 가능하다.

  //useEffect의 두번째 인자인 배열에는 useEffect의 첫번째 인자로 사용되는 state or prop를
  //넣어줘야 합니당ㅇ 그래야 useEffect가 해당 인자들이 업데이트 될 때마다 다시 동작하기 때문입니다!

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        GO back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>${product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  style={{ width: "100%" }}
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
