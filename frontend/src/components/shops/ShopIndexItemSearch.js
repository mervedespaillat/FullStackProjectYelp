import { Link } from "react-router-dom";
import React from "react";

const ShopIndexItemSearch = ({ shop }) => {
  const shopId = Object.keys(shop)[0];
  const detail = shop[shopId];

  console.log(detail);

  if (!detail) {
    return <div>Loading</div>;
  }

  return (
    <>
      <li key={shop.id}>
        <Link to={`/shops/${detail.id}`}>{detail.name}</Link>
      </li>
    </>
  );
};

export default ShopIndexItemSearch;
