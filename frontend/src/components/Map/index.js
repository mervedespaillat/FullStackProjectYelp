import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import "./map.css";
import { useSelector } from "react-redux";
import { getShop } from "../../store/shops";

const MeltMapWrapper = () => {
  // const { shopId } = useParams();
  const shop = useSelector(getShop);
  const lat = shop.longitude;
  const lng = shop.latitude;
  const center = { lat: lat, lng: lng };
  const zoom = 10;

  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  console.log("map", shop);

  return (
    <div className="map-one">
      <Wrapper apiKey={key}>
        <MyMapComponent center={center} zoom={13} />
      </Wrapper>
    </div>
  );
};

export function MyMapComponent({ center, zoom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
    });
  }, [center, zoom]);

  return <div ref={mapRef} className="map" />;
}

export default MeltMapWrapper;
