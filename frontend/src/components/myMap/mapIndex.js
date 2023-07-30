// import { Wrapper } from "@googlemaps/react-wrapper";
// import { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { useSelector } from "react-redux";
// import { getShop, getShops } from "../../store/shops";
// import "./MapIndex.css"
// // default
// const MapIndex=()=> {


//   const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

//     return (
//         <div className="mapIndex">
    
//        <Wrapper apiKey={key}>
//          <MyMapComponent center={{lat:40.73816681474568, lng:-73.99427720152842}} zoom={14} />
//        </Wrapper>
//          </div>
//     )
// }

// export function MyMapComponent({ center, zoom }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center,
//       zoom,
//     });
//     const marker = new window.google.maps.Marker({position: center, map: map})
//   },[center, zoom]);

//   return <div ref={mapRef} className="myMapIndex" />;
// }

// export default MapIndex

// MeltWrapper.js (YourMapComponentPath)

import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import './MapIndex.css'

export function MapComponent({ shops, zoom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!shops || shops.length === 0) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: shops[0].position,
      zoom,
    });

    shops.forEach((shop) => {
      new window.google.maps.Marker({
        position: shop.position,
        map: map,
        title: shop.name,
      });
    });
  }, [shops, zoom]);

  return <div ref={mapRef} className="map-index" />;
}

const MapIndex = ({ shops }) => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Check if the 'shops' array is not defined yet
  if (!shops || shops.length === 0) {
    // Show a loading state or return null if no shops data is available
    return <div>Loading...</div>;
  }

  // Create an array of objects with 'position' property for each shop
  const shopPositions = shops.map((shop) => ({
    position: { lat: shop.longitude, lng: shop.latitude },
    name: shop.name,
  }));

  return (
    <div className="map-one-index">
      <Wrapper apiKey={key}>
        <MapComponent shops={shopPositions} zoom={10} />
      </Wrapper>
    </div>
  );
};

export default MapIndex;
