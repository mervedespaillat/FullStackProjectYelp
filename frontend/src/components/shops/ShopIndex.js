import { useDispatch, useSelector } from "react-redux";
import { fetchShops, getShops } from "../../store/shops";
import { useEffect } from "react";
import ShopIndexItem from "./ShopIndexItem";
import "./shopIndex.css";
import MeltMapWrapper from "../Map";

const ShopIndex = () => {
  const dispatch = useDispatch();

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
            <ul className="index-list">
              {shops.map((shop, index) => (
              <>
                      <li className="list-items">
                        <ShopIndexItem className="a" key={index} shop={shop}>
                          {shop.id}.{shop.name}
                        </ShopIndexItem>
                        <p>Ratings...</p>
                        <p className="money city"> $$ • {shop.city}</p>
                        <p>
                          <span style={{ color: "green", fontSize: "22px" }}>
                            Open
                          </span>{" "}
                          <span style={{ color: "black", fontSize: "14px" }}>
                            until {shop.closingTime}.00PM
                          </span>
                        </p>
                        <p>"Best ice cream in town!"</p>
                      </li>
              </>
            ))}
                    </ul>
          </div>
          <div className="image"></div>
          <div className="split right">
            <MeltMapWrapper className="map"></MeltMapWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopIndex;
