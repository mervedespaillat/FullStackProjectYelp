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

  if (!shops || shops.length === 0) {

    return <div>Loading...</div>;
  }

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
