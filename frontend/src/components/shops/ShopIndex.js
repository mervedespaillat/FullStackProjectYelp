import { useDispatch, useSelector } from "react-redux";
import { fetchShops, getShops } from "../../store/shops";
import { useEffect } from "react";
import ShopIndexItem from "./ShopIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './shopIndex.css'
import Card from "../Card/card";



const ShopIndex = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchShops());
  }, []);

   const shops = useSelector(getShops);

  return (
    <>
    <div className="shop-index">
      {shops.map((shop, index) => (
        // <ShopIndexItem className="indexed-item" key={index} shop={shop} />
        <Card
        key={index}
        shopName={<ShopIndexItem key={index} shop={shop}>{shop.name}</ShopIndexItem>}
        address={shop.address}
        city={shop.city}
        image="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        className="card"
      ></Card> 
      ))}
      </div>
    </>
  );
};

export default ShopIndex;
