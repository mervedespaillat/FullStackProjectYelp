import { useDispatch, useSelector } from "react-redux";
import { fetchShops, getShop, getShops } from "../../store/shops";
import { useEffect, useState } from "react";
import ShopIndexItem from "./ShopIndexItem";
import "./shopIndex.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchReviews, getReviews } from "../../store/reviews";
import RatingStars from "../RatingStars/ratingStars";
import MeltMapIndexWrapper from "../myMap/mapIndex";


const ShopIndex = () => {
  const dispatch = useDispatch();

  const { shopId } = useParams();
  const shop = useSelector(getShop(shopId));
  console.log(shop)

  const reviews = useSelector(getReviews);
  useEffect(()=>{
    dispatch(fetchReviews(shopId))
  },[shopId])
 

  const [ rating, setRating] = useState(0)

  useEffect(()=>{
    if(shop){
      setRating(shop.rating)
    }
  },[shop])
  
  useEffect(() => {
    dispatch(fetchShops());
  }, []);

  const shops = useSelector(getShops);
  if (!shops) return null;
  

  return (
    <>
      <div id="main-container">
        <div className="container">
          <div className="split left">
              {shops.map((shop, index) => (
                
                <div className="list-items">
                        <div className="split-card card-left">

                  <img src={shop.photo} className="index-image" />
                        </div>
          
                <div className="split-card card-right">
                        <ul className="index-list">
                        <li>
                        <ShopIndexItem className="a" key={index} shop={shop}>
                          {shop.id}.{shop.name}
                        </ShopIndexItem>
                        <RatingStars rating={shop.rating} setRating={(setRating)} readOnly={true}/>

                        <p className="money city"> $$ • {shop.city}</p>
                        <p>
                          <span style={{ color: "green", fontSize: "22px" }}>
                            Open
                          </span>{" "}
                          <span style={{ color: "black", fontSize: "14px" }}>
                            until {shop.closingTime}.00PM
                          </span>
                        </p>
                      </li>
                    </ul>
                </div>
                </div>
            ))}
          </div>
          <div className="image"></div>
          <div className="split right">
            <MeltMapIndexWrapper className="mapIndex"></MeltMapIndexWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopIndex;
