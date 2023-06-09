import Navigation from "../../layouts/Navigation"
import SignupForm from "../../components/SignupForm";
import LoginForm from "../../components/login/Login";
import MainPage from "../../components/mainPage";
import Footer from "../../layouts/footer";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopShow from "../../components/shops/ShopShow";
import React from "react";
import ShopIndex from "../../components/shops/ShopIndex";
import "./home.css";
import ReviewForm from "../../components/Reviews/reviewForm";


const Home = () => {

 

  return (
    <div className="home">
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/shops/:shopId">
          <ShopShow />
        </Route>
        <Route exact path="/shops">
          <ShopIndex />
        </Route>
        <Route exact path="/shops/:shopId/review">
          <ReviewForm/>
        </Route>
        <Route exact path="/shops/:shopId/:reviewId/edit">
          <ReviewForm/> ///Change this edit
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};
export default Home;
