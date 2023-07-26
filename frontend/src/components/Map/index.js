import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import './map.css'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getShop, getShops } from "../../store/shops";


// default
const MeltMapWrapper=()=> {

  const { shopId } = useParams(); 
  const shop = useSelector(getShop(shopId)); 
  const lat = shop.longitude;
  const lng = shop.latitude;
  const center = { lat: lat, lng: lng };
  const zoom = 10;

  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY


    return (
        <div className="map-one">
       <Wrapper apiKey={key}>
         <MyMapComponent center={center} zoom={13} />
       </Wrapper>
         </div>
    )
}

export function MyMapComponent({ center, zoom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    const marker = new window.google.maps.Marker({position: center, map: map})
  },[center, zoom]);

  return <div ref={mapRef} className="map"  />;
}

export default MeltMapWrapper






// import React, { useEffect, useRef, useState } from 'react';
// import { Wrapper } from '@googlemaps/react-wrapper';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector } from 'react-redux';
// import { getShop } from '../../store/shops';

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);

//   const { shopId } = useParams();
// //   console.log(shopId)
//   const shop = useSelector(getShop(shopId));
// //   console.log(shop)
//   const lati = shop.longitude;
//   const lngi = shop.latitude;

//   useEffect(() => {
//     if (!map) {
//       const mapOptions = {
//         center: { lat: lati
//           , lng: lngi
//         }, // Set the initial center of the map
//         zoom: 12, // Set the initial zoom level
//       };

//       const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
//       setMap(newMap);
//     }
//   }, [map]);

//   return (
//     <div ref={mapRef} style={{ height: '400px', width: '100%' }}>
//       {/* Map container */}
//     </div>
//   );
// };

// const MeltMapWrapper = () => {
//   const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

//   return (
//     <Wrapper apiKey={key}>
//       {/* Wrap your map component with the Wrapper component and provide your API key */}
//       <MapComponent />
//     </Wrapper>
//   );
// };

// export default MeltMapWrapper;
