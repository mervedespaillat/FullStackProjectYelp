import { Link } from "react-router-dom";
import React from "react";
import './ShopIndexItem.css'
const ShopIndexItem = ({ shop }) => {


  if (!shop || !shop.id) {
    return <div>Loading</div>;
  }
  return (
    <>
      <li key={shop.id} className="index-name">
        <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
      </li>
    </>
  );
};

export default ShopIndexItem;
