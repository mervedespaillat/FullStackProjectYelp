// MeltWrapper.js (YourMapComponentPath)

import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

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

  return <div ref={mapRef} className="map" />;
}

const MeltWrapper = ({ shops }) => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Check if the 'shops' array is not defined yet
  if (!shops || shops.length === 0) {
    // Show a loading state or return null if no shops data is available
    return <div>Loading...</div>;
  }

  // Create an array of objects with 'position' property for each shop
  const shopPositions = shops.map((shop) => ({
    position: { lat: shop.latitude, lng: shop.longitude },
    name: shop.name,
  }));

  return (
    <div className="map-one">
      <Wrapper apiKey={key}>
        <MyMapComponent shops={shopPositions} zoom={13} />
      </Wrapper>
    </div>
  );
};

export default MapIndex;
