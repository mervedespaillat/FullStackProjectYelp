import "./main.css";
import React, { useEffect } from "react";
// import ShopShow from '../shops/ShopShow'
import {
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopLast } from "../../store/shops";
import Card from "../Card/card";
import { fetchLastReviews } from "../../store/reviews";


const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastReviews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchShopLast());
  }, []);
  const images = [
    "https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3115&q=80",
    "https://images.unsplash.com/photo-1627373719412-746f5c1e5363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80",
  ];

  const lastThreeReviews = useSelector((state) => Object.values(state.review));

  const [value, setValue] = React.useState(0);

  const history = useHistory();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === images.length - 1 ? 0 : v + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/shops");
  };

  return (
    <>
      <div className="home-page">
        <div className="background-img">
          <img src={images[value]} alt="background" />
          {/* <ShopShow/> */}
          <div className="home-text">
            <p className="app-name">Melt!</p>
            <button
              className="shops-button"
              type="button"
              onClick={handleClick}
            >
              Ice Cream Shops
            </button>
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
          <h1 className="recently-added">Recent Activity</h1>

          <div className="card-container">
            {lastThreeReviews.map((reviewData, index) => (
              <Card
                key={index}
                shopId={reviewData.shopId}
                shopName={reviewData.shopName}
                address={reviewData.address}
                city={reviewData.body}
                rating={reviewData.rating}
                image={
                  reviewData.shopPhoto
                }
                userName={reviewData.firstName}
                photo={reviewData.userPhoto}
                className="card"
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
