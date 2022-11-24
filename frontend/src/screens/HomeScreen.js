import React, { useState, useEffect } from "react";
// It's to use state in functional components because traditionally
// with class based components, you would define your state in the
//  constructor. Well, with functions, we obviously don't have a constructor.
// So we use the use state hook.
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

// And what I'm going to do for now is add products as component level state.

// Now, when it comes to state, you have component level and you have global or application level state.

// Now, products ultimately is going to be global state when we get into Redox.
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //     So as soon as this homescreen loads, that's going to fire off.

    // Now that's where we want to make our request because we want
    //  these products as soon as the component
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      // Now, once we fetch that data, we want to set it to this product ="useState([]);".

      // We want to we want to change it from this empty array to the data that we get back from that that endpoint.

      // So we do that by calling set products because that's what we defined above to change this piece of state.

      setProducts(data);
    };
  });
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* key의 중요성? */}
            {/* small screen==12 columns */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
