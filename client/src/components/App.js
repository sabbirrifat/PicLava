import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Home from "./views/Home/Home"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/dashboard" component={Auth(LandingPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, true)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
