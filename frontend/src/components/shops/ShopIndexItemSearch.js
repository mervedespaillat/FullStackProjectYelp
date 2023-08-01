import { Link } from "react-router-dom";
import React from "react";
import './ShopIndexItemSearch.css'

const ShopIndexItemSearch = ({ shop }) => {
  const shopId = Object.keys(shop)[0];
  const detail = shop[shopId];


  if (!detail || !detail.id) {
    return <div>Loading</div>;
  }

  return (
    <>
      <li key={detail.id} className="search-i">
      <i className="fa-solid fa-ice-cream"></i>
        <Link to={`/shops/${detail.id}`} className='search-a'> {detail.name}</Link>
      </li>
    </>
  );
};

export default ShopIndexItemSearch;
