import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import './map.css'

// default
const MeltMapWrapper=()=> {

  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    return (
        <div className="map">
       <Wrapper apiKey={key}>
         <MyMapComponent center={{ lat: 40.932690, lng: 29.126810 }} zoom={10} />
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

  return <div ref={ref} className="map" />;
}

export default MeltMapWrapper