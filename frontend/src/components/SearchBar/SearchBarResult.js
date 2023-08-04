import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchSearchShops } from "../../store/shops";
import "./SearchBarResult.css";
import ShopIndexItem from "../shops/ShopIndexItem";
import Card from "../Card/card";
import MapIndex from "../IndexMap/MapIndex";
import RatingStars from "../RatingStars/ratingStars";



const SearchBarResult = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const searchedShops = useSelector((state) => state.shops);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(fetchSearchShops(query));
  }, [dispatch, query]);

  if (!searchedShops || Object.keys(searchedShops).length === 0) {
    return <div className="no-result">No results found</div>;
  }
  return (

    <>
    <div id="main-container">
      <div className="container">
        <div className="split-left">
          <div className="scrollable-container">
            {Object.values(searchedShops).map((shop) => (
              <div className="list-items" key={shop.id}>
                <div className="split-card card-left">
                  <img src={shop.photo} className="index-image" />
                </div>

                <div className="split-card card-right">
                  <ul className="index-list">
                    <ShopIndexItem className="a" key={shop.id} shop={shop}>
                      {shop.id}.{shop.name}
                    </ShopIndexItem>
                    <RatingStars
                      rating={shop.rating}
                      setRating={setRating}
                      readOnly={true}
                    />

                    <p className="money city"> $$ • {shop.city}</p>
                    <p>
                      <span style={{ color: "green", fontSize: "22px" }}>
                        Open
                      </span>{" "}
                      <span style={{ color: "black", fontSize: "14px" }}>
                        until {shop.closingTime}.00PM
                      </span>
                    </p>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="image"></div> */}
        <div className="split-right">
          <MapIndex shops={Object.values(searchedShops)} className="mapIndexPage"></MapIndex>
        </div>
      </div>
    </div>
  </>
  );
};

export default SearchBarResult;
