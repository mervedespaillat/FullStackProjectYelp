import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getShop, getShops } from "../../store/shops";
import "./MapIndex.css"
// default
const MapIndex=()=> {


  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    return (
        <div className="mapIndex">
    
       <Wrapper apiKey={key}>
         <MyMapComponent center={{lat:40.73816681474568, lng:-73.99427720152842}} zoom={14} />
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

  return <div ref={mapRef} className="myMapIndex" />;
}

export default MapIndex