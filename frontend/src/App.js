import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            {/*  for the route, we just want to put in exact it has to match this exact. */}
            {/* react outer dom version 6이상부터는 route를 routes안에 넣어야 함 */}
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />} />
            </Route>
            {/* And then I'd what the ID is going to be optional so we can put a question mark to make this optional, */}
            {/* bow, the optinal balbla ":id?" is not working */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
