import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchSearchShops } from "../../store/shops";
import "./SearchBarResult.css";
import ShopIndexItemSearch from "../shops/ShopIndexItemSearch";

const SearchBarResult = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchedShops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(fetchSearchShops(query));
  }, [dispatch, query]);

  if (!searchedShops || Object.keys(searchedShops).length === 0) {
    return <div>No results found</div>;
  }
  // const shopItem = Object.values(searchedShops["0"])
  //   // .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((shop) => <ShopIndexItem shop={shop} key={shop.id} />);

  return (
    <>
      <ul id="shop-profile-container">
        {Object.values(searchedShops).map((shop) => (
          <ShopIndexItemSearch shop={shop} key={shop.id} />
        ))}
      </ul>
    </>
  );
};

export default SearchBarResult;
