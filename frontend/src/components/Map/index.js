import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './map.css'
import { getReview } from "../../store/reviews";

// default

const MeltMapWrapper=({shopId})=> {
  
  // const { shopId } = useParams();
    // const shop = useSelector(getReview(shopId));
    // const lat = shop.latitude;
    // const lng = shop.longitude;
    let key = process.env.GOOGLE_MAPS_API_KEY
    const center =  { lat: 40.7184296, lng: 0 };
    const zoom = 15;


    return (
        <div className="map">
       <Wrapper apiKey={key}>
         <MyMapComponent center={center} zoom={zoom} />
       </Wrapper>
         </div>
    )
}

export function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref}  style={{ width: '300px', height: '300px' }}  className="map" />;
}

export default MeltMapWrapper