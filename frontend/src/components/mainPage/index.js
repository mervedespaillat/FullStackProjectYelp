import "./main.css";
import image from "../../assets/images/strawberry.jpg";
import ShopIndex from "../shops/ShopIndex";
import React, { useState, Component, useEffect } from "react";
// import ShopShow from '../shops/ShopShow'
import Carousel from "react-simply-carousel";
import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopLast } from "../../store/shops";
import Card from "../Card/card";
import ShopIndexItem from "../shops/ShopIndexItem";
import { fetchLastReviews } from "../../store/reviews";

const MainPage = () => {

    const dispatch = useDispatch()
 
    const lastThreeShops = useSelector(state => Object.values(state.shops))

    const lastThreeReviews = useSelector(state => Object.values(state.review))
  
    useEffect(()=>{
      dispatch(fetchLastReviews())
    },[])

    useEffect(()=>{
      dispatch(fetchShopLast())
    },[])
  const images = [
    "https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3115&q=80",
    "https://images.unsplash.com/photo-1627373719412-746f5c1e5363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80",
  ];

  const [value, setValue] = React.useState(0);

  const history = useHistory()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === images.length - 1 ? 0 : v + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/shops')
}

  return (
    <>
      <div className="home-page">
        <div className="background-img">
        <img  src={images[value]} alt="background" />
        {/* <ShopShow/> */}
        <div className="home-text">
          <p className="app-name">Melt!</p>
          <button className="shops-button" type="button" onClick={handleClick} >Ice Cream Shops</button>
          <p className="main-text">
            Where you can find the best ice cream in town!
          </p>
        </div>
        </div>
      
      <div className="middle-page-main">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <ShopIndex /> */}
          <h1 className="recently-added">Recently Added Shops</h1>
        <div className="card-container">
         {lastThreeShops.map((cardData, index) => (
           <Card
          key={index}
          shopId={cardData.id}
          shopName={<ShopIndexItem key={index} className="a" shop={cardData}>{cardData.name}</ShopIndexItem>}
          address={cardData.address}
          city={cardData.city}
          image={cardData.photo}
          className="card"
        ></Card> 
       ))} 
       </div>
       <div className="card-container">
        {lastThreeReviews.map((reviewData, index)=>(
          
          <Card
          key={index}
         
          shopName={reviewData.shopId}
          address={reviewData.rating}
          city={reviewData.body}
          image="https://images.unsplash.com/photo-1516043827470-d52c543c438f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
          className="card"></Card>
        ))}
       </div>

      </div>
      </div>
    </>
  );
};

export default MainPage;
