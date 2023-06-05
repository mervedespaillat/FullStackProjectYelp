import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/Login";
import SignupForm from "./components/SignupForm";
import Navigation from "./layouts/Navigation";
import MainPage from "./components/mainPage";
// import Shops from './components/shops'
import ShopShow from "./components/shops/ShopShow";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
    
      <Home></Home>
      {/* <MainPage/>
    <Navigation/>
    <Switch>
      <Route path="/login">
        <LoginForm/>
      </Route>
      <Route path="/signup">
        <SignupForm/>
      </Route>
      <Route path="/shops/:shopId"> 
        <ShopShow/>
      </Route>
    </Switch>  */}
    </>
  );
}

export default App;
