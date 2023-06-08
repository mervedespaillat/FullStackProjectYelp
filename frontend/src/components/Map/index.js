import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import './map.css'

// default
const MeltMapWrapper=()=> {
    return (
        <div className="map">
       <Wrapper apiKey={"AIzaSyAFxMaLXHUS9fPBdsU_8mT25fi_mdLkYxo"}>
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