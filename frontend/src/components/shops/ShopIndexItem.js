import { Link } from "react-router-dom";
import React from "react";

const ShopIndexItem = ({ shop }) => {
  if (!shop || !shop.id) {
    return <div>Loading</div>;
  }
  return (
    <>
      <li key={shop.id}>
        <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
      </li>
    </>
  );
};

export default ShopIndexItem;
