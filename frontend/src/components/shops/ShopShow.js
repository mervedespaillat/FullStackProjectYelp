import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShop, fetchShop } from "../../store/shops";
import "./shopShow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import MeltMapWrapper from "../Map";


const ShopShow = () => {
  const dispatch = useDispatch();
  const { shopId } = useParams();
  const shop = useSelector(getShop(shopId));

  useEffect(() => {
    dispatch(fetchShop(shopId));
  }, [shopId, dispatch]);

  if (!shop) {
    return <div>Loading....</div>;
  }
  const { name, address, city, state, zipCode, link, phoneNumber } = shop;

  const CarouselData = [
    {
      headerText: null,
      subText: "Sub Text One",
      image:
        "https://s.hdnux.com/photos/01/32/23/30/23672339/3/ratio3x2_1200.jpg",
    },
    {
      headerText: "Header Text Two",
      subText: null,
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/content_detail/public/acquia-dam-assets/2020-08/Approved_VL_Website%2B1000X610.jpg?h=a0c1a9c0&itok=4jhAY-K-",
    },
  ];

  return (
    <>
      <div className="shop-page">
        <div className="image-container">
          <img
            className="shop-pic"
            src="https://s.hdnux.com/photos/01/32/23/30/23672339/3/ratio3x2_1200.jpg"
            alt="shop picture"
          />
          <div className="image-text">
            <h1>{name}</h1>

            <p>Open 10:00 AM - 7:00 PM</p>
          </div>
        </div>
        {/* <div className="rewiew-button">
          <button type="button">Write a rewiew</button>
        </div>
        <div type="button" className="photo-button">
          <button>Add a photo</button>
        </div> */}
        <div className="card">
          <ul className="card-content">
            <li className="card-name">{name}</li>
            <li className="card-link">
              <a href={link} target="_blank">
                {link}
              </a>
            </li>
            <li className="card-phoneNumber">{phoneNumber}</li>
            <li className="address-title">Address:</li>
            <li className="card-street">{address}</li>
            <li className="card-address">
              {city}, {state}, {zipCode}
            </li>
          </ul>
        </div>
        <div className="map">
        <MeltMapWrapper></MeltMapWrapper>
        </div>
      </div>
    </>
  );
};

export default ShopShow;
